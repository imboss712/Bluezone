const express = require('express');

const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

const Bank = require('../models/Bank');

const { validateBankInput } = require('../validation/banks/banks');

const router = express.Router();

// Create Bank Details
router.post('/', auth, async (req, res) => {
  const { errors, isValid } = validateBankInput(req.body);

  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }
  try {
    const isBank = await Bank.findOne({ user: req.user._id })
      .select({ user: 1 })
      .lean();
    if (isBank) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Bank details already exists' }] });
    }

    let options = {};

    if (req.body.accountType === 'vpa') {
      options = {
        vpaAddress: req.body.vpaAddress
      };
    } else if (req.body.accountType === 'bank_account') {
      options = {
        bankAccNumber: req.body.bankAccNumber,
        bankIfsc: req.body.bankIfsc,
        accHolderName: req.body.accHolderName
      };
    } else if (req.body.accountType === 'paytm_wallet') {
      options = {
        paytmNumber: req.body.paytmNumber
      };
    }

    const bank = new Bank({
      ...options,
      accountType: req.body.accountType,
      user: req.user._id
    });

    req.user.isBank = true;

    const [myBank] = await Promise.all([bank.save(), req.user.save()]);

    res.send(myBank);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get Own Bank Details
router.get('/', auth, async (req, res) => {
  try {
    const bank = await Bank.findOne({
      user: req.user._id
    }).lean();

    if (!bank) {
      return res
        .status(404)
        .send({ errors: [{ msg: 'Bank details not found' }] });
    }

    res.send(bank);
  } catch (err) {
    res.status(500).send();
  }
});

// Get Bank Detail By userId (Admin Route)
router.get('/:userId', auth, authAdmin, async (req, res) => {
  try {
    const bank = await Bank.findOne({
      user: req.params.userId
    }).lean();

    if (!bank) {
      return res
        .status(404)
        .send({ errors: [{ msg: 'Bank details not found' }] });
    }

    res.send(bank);
  } catch (err) {
    res.status(500).send();
  }
});

// Update Own Bank Details
router.patch('/', auth, async (req, res) => {
  const updates = ['accountType'];

  if (req.body.accountType === 'vpa') {
    updates.push('vpaAddress');
  } else if (req.body.accountType === 'bank_account') {
    updates.push('bankAccNumber', 'bankIfsc', 'accHolderName');
  } else if (req.body.accountType === 'paytm_wallet') {
    updates.push('paytmNumber');
  }

  const { errors, isValid } = validateBankInput(req.body);
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }

  try {
    const bank = await Bank.findOne({ user: req.user._id });
    if (!bank) {
      return res
        .status(404)
        .send({ errors: [{ msg: 'Bank details not found' }] });
    }

    // eslint-disable-next-line security/detect-object-injection
    updates.forEach((update) => (bank[update] = req.body[update]));

    await bank.save();

    res.send(bank);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
