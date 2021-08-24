const express = require('express');
const mongoose = require('mongoose');

const Match = require('../models/Match');
const Team = require('../models/Team');

const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

const {
  validateCreateMatchInput,
  validateUpdateMatchInput
} = require('../validation/matches/matches');

const { sendMatchIdPwd } = require('../messages');

const router = express.Router();

const nonSchemaId = (id) => new mongoose.Types.ObjectId(id);

const prizePoolItems = [
  { type: 'Solo', value: 0.7 },
  { type: 'Duo', value: 0.75 },
  { type: 'Squad', value: 0.8 }
];

// Create match (Admin Route)
router.post('/matches', auth, authAdmin, async (req, res) => {
  const { errors, isValid } = validateCreateMatchInput(req.body);
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }

  try {
    const isMatch = await Match.findOne({
      matchDate: req.body.matchDate,
      matchTime: req.body.matchTime,
      host: req.user._id
    })
      .select({ host: 1 })
      .lean();

    if (isMatch) {
      return res.status(400).send({
        errors: [{ msg: 'Match with this date time already exists' }]
      });
    }

    const match = new Match({ ...req.body, host: req.user._id });
    match.prizePool =
      match.entryFees *
      100 *
      prizePoolItems.find((pp) => pp.type === match.teamType).value;

    await match.save();

    res.status(201).send(match);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get match by id
router.get('/matches/:id', auth, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id).lean();
    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    res.send(match);
  } catch (err) {
    res.status(500).send();
  }
});

// Get matches
router.get('/matches', auth, async (req, res) => {
  try {
    const matches = await Match.find({
      matchStatus: { $ne: 'Result' }
    })
      .lean()
      .sort({ createdAt: -1 })
      .limit(20);

    res.send(matches);
  } catch (err) {
    res.status(500).send();
  }
});

// Update match by id (Admin Route)
router.patch('/matches/:id', auth, authAdmin, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['matchDate', 'matchTime'];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ errors: [{ msg: 'Invalid Updates' }] });
  }

  const { errors, isValid } = validateUpdateMatchInput(req.body);
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }

  try {
    const match = await Match.findOne({
      _id: req.params.id,
      host: req.user._id
    }).select({ matchDate: 1, matchTime: 1 });

    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    updates.forEach((update) => {
      // eslint-disable-next-line security/detect-object-injection
      match[update] = req.body[update];
    });

    await match.save();

    res.send(match);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get my matches
router.get('/my-matches', auth, async (req, res) => {
  const { matchStatus } = req.query;

  let queryArray = [
    'Open',
    'MailUnsent',
    'MailSent',
    'Live',
    'Completed',
    'Result'
  ];

  if (matchStatus === 'Completed') {
    queryArray = ['Completed', 'Result'];
  }
  if (matchStatus === 'Open') {
    queryArray = ['Open', 'MailUnsent', 'MailSent', 'Live'];
  }

  try {
    let matches = [];

    if (req.user.role === 'admin') {
      matches = await Match.find({
        host: req.user._id,
        matchStatus: { $in: queryArray }
      })
        .lean()
        .sort({ createdAt: -1 })
        .limit(20);
    } else {
      const teams = await Team.find({ 'players.playerId': req.user._id })
        .select({ match: 1 })
        .lean()
        .sort({ createdAt: -1 })
        .limit(20);

      const matchIds = teams.map((team) => nonSchemaId(team.match));

      matches = await Match.find({
        _id: { $in: matchIds },
        matchStatus: { $in: queryArray }
      })
        .lean()
        .sort({ createdAt: -1 });
    }

    res.send(matches);
  } catch (err) {
    res.status(500).send();
  }
});

// Set match status by id (Admin Route)
router.post('/matches/:id/set-status', auth, authAdmin, async (req, res) => {
  const { matchStatus } = req.body;
  const allowedStatus = [
    'Open',
    'MailUnsent',
    'MailSent',
    'Live',
    'Completed',
    'Result'
  ];
  const isValidOperation = allowedStatus.includes(matchStatus);

  if (!isValidOperation) {
    return res.status(400).send({ errors: [{ msg: 'Invalid Status Value' }] });
  }

  try {
    const match = await Match.findOne({
      _id: req.params.id,
      host: req.user._id
    }).select({ matchStatus: 1, participantStatus: 1 });

    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    match.matchStatus = matchStatus;

    if (matchStatus === 'Open') {
      match.participantStatus = 'Open';
    } else {
      match.participantStatus = 'Closed';
    }

    await match.save();

    res.send(match);
  } catch (err) {
    res.status(500).send();
  }
});

// Send room details to participants (Admin Route)
router.post('/matches/:id/send-details', auth, async (req, res) => {
  const { roomId, roomPwd } = req.body;

  try {
    const match = await Match.findById(req.params.id).select({
      matchStatus: 1,
      participantStatus: 1
    });

    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    const teams = await Team.aggregate([
      { $match: { match: nonSchemaId(match._id) } },
      { $unwind: '$players' },
      {
        $lookup: {
          from: 'users',
          localField: 'players.playerId',
          foreignField: '_id',
          as: 'players'
        }
      },
      {
        $project: {
          teamCode: 1,
          'players.phone': 1
        }
      },
      { $unwind: '$players' },
      {
        $group: {
          _id: '$teamCode',
          players: {
            $push: '$players.phone'
          }
        }
      },
      { $unwind: '$players' },
      {
        $group: {
          _id: match._id,
          phones: {
            $push: '$players'
          }
        }
      }
    ]);

    const { phones } = teams[0];
    sendMatchIdPwd(phones, roomId, roomPwd);

    match.matchStatus = 'MailSent';
    match.participantStatus = 'Closed';

    await match.save();

    res.send(match);
  } catch (err) {
    res.status(500).send();
  }
});

// Delete match by id (Admin Route)
router.delete('/matches/:id', auth, authAdmin, async (req, res) => {
  try {
    const match = await Match.findOne({
      _id: req.params.id,
      host: req.user._id
    }).select({ host: 1 });

    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    const [, tournament] = await Promise.all([
      Team.deleteMany({ match: match._id }),
      match.remove()
    ]);

    res.send(tournament);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
