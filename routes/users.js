const express = require('express');
const jwt = require('jsonwebtoken');
const intervalToDuration = require('date-fns/intervalToDuration');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);

const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

const User = require('../models/User');
const Profile = require('../models/Profile');
const Match = require('../models/Match');
const Team = require('../models/Team');
const Bank = require('../models/Bank');
const Transaction = require('../models/Transaction');
const Payout = require('../models/Payout');

const {
  validateRegisterInput,
  validatePhoneInput,
  validateVerifyInput,
  validateUpdateInput
} = require('../validation/users/users');

const {
  sendVerificationCode,
  sendVerificationSuccessMsg,
  sendDeleteUserMsg
} = require('../messages/index');

const router = express.Router();

// Register User and Send Verification Code
router.post('/', async (req, res) => {
  const { phone, name, dob } = req.body;

  const { errors, isValid } = validateRegisterInput({ phone, name, dob });
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }

  try {
    const isUser = await User.findOne({ phone }).select({ phone: 1 }).lean();
    if (isUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'User with this phone already exist' }] });
    }

    const diff = intervalToDuration({
      start: new Date(dob),
      end: new Date()
    });

    const user = new User({ phone, name, dob });
    user.isAllowed = diff.years > 18;

    await user.save();

    sendVerificationCode(phone);

    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Send & Resend Verification Code
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;

  const { errors, isValid } = validatePhoneInput({ phone });
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }
  try {
    const user = await User.findOne({ phone }).select({ phone: 1 }).lean();
    if (!user) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'User is not registered' }] });
    }

    sendVerificationCode(phone);

    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Mobile Code Verification Route
router.post('/verify', async (req, res) => {
  const { phone, code } = req.body;

  const { errors, isValid } = validateVerifyInput({ phone, code });
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }

  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).send({ errors: [{ msg: 'Unable to find user' }] });
    }

    const verification_check = await client.verify
      .services(verifyServiceSid)
      .verificationChecks.create({ to: `+91${phone}`, code: code });

    if (
      verification_check.status !== 'approved' ||
      verification_check.status === 'pending'
    ) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Invalid verification code' }] });
    }

    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: '7 days'
      }
    );

    user.tokens = user.tokens.concat({ token });
    await user.save();

    sendVerificationSuccessMsg(user.phone, user.name);

    res.send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Logout from current device or session
router.post('/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

// Logout from all devices
router.post('/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

// Get user
router.get('/me', auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(500).send();
  }
});

// Update User
router.patch('/me', auth, async (req, res) => {
  const { name, dob } = req.body;

  const updates = Object.keys({ name, dob });
  const allowedUpdates = ['name', 'dob'];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ errors: [{ msg: 'Invalid Updates' }] });
  }

  const { errors, isValid } = validateUpdateInput({ name, dob });
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }

  try {
    req.user.name = name;
    req.user.dob = dob;

    const diff = intervalToDuration({
      start: new Date(dob),
      end: new Date()
    });

    req.user.isAllowed = diff.years > 18;

    await req.user.save();

    res.send(req.user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add money into Wallet via Razorpay Checkout
router.post('/add-money', auth, async (req, res) => {
  const { amount } = req.body;

  if (amount <= 0) {
    return res.status(400).send({
      errors: [{ msg: 'Invalid amount of money' }]
    });
  }

  try {
    if (req.user.role === 'admin') {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Restricted route for admin' }] });
    }

    req.user.amount += amount;

    const transaction = new Transaction({
      from: 'Bank',
      to: 'Wallet',
      type: 'Credited',
      subType: 'Deposit',
      paymentAmount: amount,
      user: req.user._id
    });

    const [user] = await Promise.all([req.user.save(), transaction.save()]);

    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Request money to bluezone
router.post('/request-money', auth, async (req, res) => {
  const { requestedAmount } = req.body;

  if (requestedAmount < 50) {
    return res.status(404).send({
      errors: [
        { msg: 'Request money must be greater than or equal to 50 Ruppees' }
      ]
    });
  }

  try {
    if (req.user.role === 'admin') {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Restricted route for admin' }] });
    }

    if (req.user.amount < 200) {
      return res.status(400).send({
        errors: [{ msg: 'Wallet amount must be greater than 200 to withdraw' }]
      });
    }

    if (requestedAmount > req.user.amount) {
      return res.status(400).send({
        errors: [
          { msg: 'Withdrawal amount can not be greater than wallet amount' }
        ]
      });
    }

    req.user.requestedAmount += requestedAmount;
    req.user.amount -= requestedAmount;

    const transaction = new Transaction({
      from: 'Wallet',
      to: 'Bank',
      type: 'Debited',
      subType: 'Withdraw Request',
      paymentAmount: requestedAmount,
      user: req.user._id
    });

    const [user] = await Promise.all([req.user.save(), transaction.save()]);

    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all withdrawal requests (Admin Route)
router.get('/withdrawal-requets', auth, authAdmin, async (req, res) => {
  try {
    const users = await User.find({ requestedAmount: { $gte: 50 } })
      .select({
        name: 1,
        phone: 1,
        isBank: 1,
        requestedAmount: 1
      })
      .lean();
    res.send(users);
  } catch (err) {
    res.status(500).send();
  }
});

// Send payout to a user (Admin Route)
router.post('/send-payout', auth, authAdmin, async (req, res) => {
  const { userId, to, amount } = req.body;

  try {
    const user = await User.findById(userId).select({ requestedAmount: 1 });

    if (!user) {
      return res.status(404).send({ errors: [{ msg: 'User not found' }] });
    }

    user.requestedAmount = 0;

    const payout = new Payout({
      to: to,
      amount: amount,
      user: user._id
    });

    const [updatedUser] = await Promise.all([user.save(), payout.save()]);

    res.send(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete User (Delete Profile, Bank, Match, Team, Transaction, Payout)
router.delete('/me', auth, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      const matches = await Match.find({ host: req.user._id })
        .select({ host: 1 })
        .lean();

      if (matches.length > 0) {
        matches.forEach(async (match) => {
          await Team.deleteMany({ match: match._id });
        });
      }

      await Match.deleteMany({ host: req.user._id });
    } else {
      const teams = await Team.find({
        'players.playerId': req.user._id
      }).select({ players: 1 });

      if (teams.length > 0) {
        teams.forEach(async (team) => {
          const player = team.players.find(
            (p) => p.playerId.toString() === req.user._id.toString()
          );
          team.players = team.players.filter(
            (p) => p.playerId.toString() !== req.user._id.toString()
          );
          if (team.players.length === 0) {
            await Team.deleteOne({ _id: team._id });
          } else {
            if (player.label === 'Leader') {
              team.players[0].label = 'Leader';
            }
            await team.save();
          }
        });
      }
    }

    const [, , , , user] = await Promise.all([
      Profile.deleteOne({ user: req.user._id }),
      Bank.deleteOne({ user: req.user._id }),
      Transaction.deleteMany({ user: req.user._id }),
      Payout.deleteMany({ user: req.user._id }),
      req.user.remove()
    ]);

    sendDeleteUserMsg(user.phone, user.name);

    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
