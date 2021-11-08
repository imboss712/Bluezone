const express = require('express');
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const { format } = require('date-fns');

const User = require('../models/User');
const Match = require('../models/Match');
const Team = require('../models/Team');
const Transaction = require('../models/Transaction');

const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const isHonest = require('../middleware/isHonest');

const { validateTeamcodeInput } = require('../validation/teams/teams');
const { positionPrizeList, killPrize } = require('../config/prize');

const { teamQueryOption } = require('../utils/teamQueryOption');

const {
  sendMatchJoinMsg
  // sendMatchResult
} = require('../messages/index');

const router = express.Router();

const nonSchemaId = (id) => new mongoose.Types.ObjectId(id);

// Create Team by matchId
router.post('/matches/:id/create-team', auth, isHonest, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id).select({
      matchDate: 1,
      matchTime: 1,
      teamType: 1,
      entryFees: 1,
      discountPercent: 1,
      participantStatus: 1,
      participants: 1
    });

    if (!match) {
      return res.status(404).send({
        errors: [{ msg: 'Match Not Found' }]
      });
    }

    if (match.participantStatus === 'Closed') {
      return res.status(400).send({
        errors: [{ msg: 'Unable to create team, Participation is closed' }]
      });
    }

    if (
      req.user.amount <
      match.entryFees - (match.entryFees * match.discountPercent) / 100
    ) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Insufficient money in your account' }] });
    }

    const players = [];
    const teams = await Team.find({ match: match._id })
      .select({ players: 1 })
      .lean();
    teams.forEach((team) =>
      team.players.forEach((player) => players.push(player.playerId.toString()))
    );

    if (players.includes(req.user._id.toString())) {
      return res.status(404).send({
        errors: [{ msg: 'Player already participated in this Match' }]
      });
    }

    switch (match.teamType) {
      case 'Solo':
        if (teams.length > 99) {
          return res
            .status(400)
            .send({ errors: [{ msg: 'Participant list is full' }] });
        }
        break;
      case 'Duo':
        if (teams.length > 49) {
          return res
            .status(400)
            .send({ errors: [{ msg: 'Participant list is full' }] });
        }
        break;
      case 'Squad':
        if (teams.length > 24) {
          return res
            .status(400)
            .send({ errors: [{ msg: 'Participant list is full' }] });
        }
        break;
      default:
        res.status(400).send({ errors: [{ msg: 'Something went wrong' }] });
        break;
    }

    const team = new Team({ match: match._id });
    team.teamCode = nanoid(8);

    const player = {
      kill: 0,
      playerId: req.user._id.toString(),
      label: 'Leader'
    };

    team.players = team.players.concat(player);

    req.user.amount -=
      match.entryFees - (match.entryFees * match.discountPercent) / 100;

    const newMatchDate = format(new Date(match.matchDate), 'yyyy-MM-dd');
    const newMatchTime = `${newMatchDate} ${match.matchTime}`;

    const formattedMatchDate = format(new Date(newMatchDate), 'dd MMM yyyy');
    const formattedMatchTime = format(new Date(newMatchTime), 'hh:mm aa');

    sendMatchJoinMsg(
      req.user.phone,
      req.user.name,
      formattedMatchDate,
      formattedMatchTime
    );

    match.participants += 1;

    if (match.participants === 100) {
      match.participantStatus = 'Full';
    }

    const transaction = new Transaction({
      paymentAmount:
        match.entryFees - (match.entryFees * match.discountPercent) / 100,
      user: req.user._id
    });

    await Promise.all([
      req.user.save(),
      team.save(),
      match.save(),
      transaction.save()
    ]);

    const teamWithProfile = await Team.aggregate([
      {
        $match: {
          'players.playerId': nonSchemaId(req.user._id),
          match: nonSchemaId(match._id)
        }
      },
      ...teamQueryOption
    ]);

    res.send(teamWithProfile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Join Team by matchId
router.post('/matches/:id/join-team', auth, isHonest, async (req, res) => {
  const { teamCode } = req.body;

  const { errors, isValid } = validateTeamcodeInput({ teamCode });
  if (!isValid) {
    return res.status(404).send({ errors: errors });
  }

  try {
    const match = await Match.findById(req.params.id).select({
      matchDate: 1,
      matchTime: 1,
      teamType: 1,
      discountPercent: 1,
      entryFees: 1,
      participantStatus: 1,
      participants: 1
    });
    if (!match) {
      return res.status(404).send({
        errors: [{ msg: 'Match Not Found' }]
      });
    }

    if (match.participantStatus === 'Closed') {
      return res.status(400).send({
        errors: [{ msg: 'Unable to join team, Participation is closed' }]
      });
    }

    if (
      req.user.amount <
      match.entryFees - (match.entryFees * match.discountPercent) / 100
    ) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Insufficient money in your account' }] });
    }

    const team = await Team.findOne({
      match: match._id,
      teamCode: teamCode
    }).select({ players: 1 });
    if (!team) {
      return res.status(404).send({ errors: [{ msg: 'Team Not Found' }] });
    }

    const players = [];
    const teams = await Team.find({ match: match._id })
      .select({ players: 1 })
      .lean();
    teams.forEach((t) =>
      t.players.forEach((p) => players.push(p.playerId.toString()))
    );

    if (players.includes(req.user._id.toString())) {
      return res.status(404).send({
        errors: [{ msg: 'Player already participated in this Match' }]
      });
    }

    if (match.teamType === 'Solo') {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Can not join Solo team' }] });
    }
    if (match.teamType === 'Duo') {
      if (team.players.length > 1) {
        return res.status(400).send({ errors: [{ msg: 'Team is Full' }] });
      }
    }
    if (match.teamType === 'Squad') {
      if (team.players.length > 3) {
        return res.status(400).send({ errors: [{ msg: 'Team is Full' }] });
      }
    }

    const player = {
      kill: 0,
      playerId: req.user._id.toString(),
      label: 'Member'
    };

    team.players = team.players.concat(player);
    req.user.amount -=
      match.entryFees - (match.entryFees * match.discountPercent) / 100;

    const newMatchDate = format(new Date(match.matchDate), 'yyyy-MM-dd');
    const newMatchTime = `${newMatchDate} ${match.matchTime}`;

    const formattedMatchDate = format(new Date(newMatchDate), 'dd MMM yyyy');
    const formattedMatchTime = format(new Date(newMatchTime), 'hh:mm aa');

    sendMatchJoinMsg(
      req.user.phone,
      req.user.name,
      formattedMatchDate,
      formattedMatchTime
    );

    match.participants += 1;

    if (match.participants === 100) {
      match.participantStatus = 'Full';
    }

    const transaction = new Transaction({
      paymentAmount:
        match.entryFees - (match.entryFees * match.discountPercent) / 100,
      user: req.user._id
    });

    await Promise.all([
      req.user.save(),
      team.save(),
      match.save(),
      transaction.save()
    ]);

    const teamWithProfile = await Team.aggregate([
      {
        $match: {
          'players.playerId': nonSchemaId(req.user._id),
          match: nonSchemaId(match._id)
        }
      },
      ...teamQueryOption
    ]);

    res.send(teamWithProfile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Remove Team
router.delete('/matches/:id/remove-team', auth, isHonest, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id).select({
      entryFees: 1,
      discountPercent: 1,
      matchStatus: 1,
      participantStatus: 1,
      participants: 1
    });
    if (!match) {
      return res.status(404).send({
        errors: [{ msg: 'Match Not Found' }]
      });
    }

    if (match.matchStatus !== 'Open') {
      return res.status(400).send({
        errors: [{ msg: 'Team delete action has been disabled' }]
      });
    }

    const team = await Team.findOne({
      'players.playerId': req.user._id,
      match: match._id
    }).select({ players: 1 });
    if (!team) {
      return res.status(404).send({ errors: [{ msg: 'Team not found' }] });
    }

    const player = team.players.find(
      (p) => p.playerId.toString() === req.user._id.toString()
    );

    if (player.label !== 'Leader' || player.label === 'Member') {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Only team leader can remove team' }] });
    }

    team.players.forEach(async (p) => {
      const user = await User.findById(p.playerId);
      user.amount +=
        (match.entryFees - (match.entryFees * match.discountPercent) / 100) *
        0.9;

      const transaction = new Transaction({
        from: 'Bluezone',
        to: 'Wallet',
        type: 'Credited',
        subType: 'Refund',
        paymentAmount:
          (match.entryFees - (match.entryFees * match.discountPercent) / 100) *
          0.9,
        user: user._id
      });

      await Promise.all([user.save(), transaction.save()]);
    });

    await team.remove();
    match.participants -= team.players.length;

    if (match.participantStatus === 'Full' || match.participants < 100) {
      match.participantStatus = 'Open';
    }

    await match.save();

    res.send(team);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Leave Team
router.post('/matches/:id/leave-team', auth, isHonest, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id).select({
      entryFees: 1,
      discountPercent: 1,
      matchStatus: 1,
      participantStatus: 1,
      participants: 1
    });

    if (!match) {
      return res.status(404).send({
        errors: [{ msg: 'Match Not Found' }]
      });
    }

    if (match.matchStatus !== 'Open') {
      return res.status(400).send({
        errors: [{ msg: 'Team leave action has been disabled' }]
      });
    }

    const team = await Team.findOne({
      'players.playerId': req.user._id,
      match: match._id
    }).select({ players: 1 });

    if (!team) {
      return res.status(404).send({ msg: 'Team not found' });
    }

    const player = team.players.find(
      (p) => p.playerId.toString() === req.user._id.toString()
    );

    team.players = team.players.filter(
      (p) => p.playerId.toString() !== req.user._id.toString()
    );

    if (team.players.length === 0) {
      await team.remove();
    } else {
      if (player.label === 'Leader') {
        team.players[0].label = 'Leader';
      }
      await team.save();
    }

    req.user.amount +=
      (match.entryFees - (match.entryFees * match.discountPercent) / 100) * 0.9;

    match.participants -= 1;

    if (match.participantStatus === 'Full' || match.participants < 100) {
      match.participantStatus = 'Open';
    }

    const transaction = new Transaction({
      from: 'Bluezone',
      to: 'Wallet',
      type: 'Credited',
      subType: 'Refund',
      paymentAmount:
        (match.entryFees - (match.entryFees * match.discountPercent) / 100) *
        0.9,
      user: req.user._id
    });

    await Promise.all([req.user.save(), match.save(), transaction.save()]);

    const teamWithProfile = await Team.aggregate([
      {
        $match: {
          _id: nonSchemaId(team._id),
          match: nonSchemaId(match._id)
        }
      },
      ...teamQueryOption
    ]);
    res.send(teamWithProfile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Kick Teammate
router.post(
  '/matches/:id/kick-teammate/:teammateId',
  auth,
  isHonest,
  async (req, res) => {
    try {
      const match = await Match.findById(req.params.id).select({
        entryFees: 1,
        discountPercent: 1,
        matchStatus: 1,
        participantStatus: 1,
        participants: 1
      });
      if (!match) {
        return res.status(404).send({
          errors: [{ msg: 'Match Not Found' }]
        });
      }

      if (match.matchStatus !== 'Open') {
        return res.status(400).send({
          errors: [{ msg: 'Teammate kick action has been disabled' }]
        });
      }

      const team = await Team.findOne({
        'players.playerId': req.user._id,
        match: match._id
      }).select({ players: 1 });

      if (!team) {
        return res.status(404).send({ errors: [{ msg: 'Team not found' }] });
      }

      const player = team.players.find(
        (p) => p.playerId.toString() === req.user._id.toString()
      );
      if (player.label !== 'Leader' || player.label === 'Member') {
        return res
          .status(400)
          .send({ errors: [{ msg: 'Only team leader can kick teammate' }] });
      }

      const teammate = team.players.find(
        (p) => p.playerId.toString() === req.params.teammateId.toString()
      );
      if (!teammate) {
        return res
          .status(404)
          .send({ errors: [{ msg: 'Teammate not found' }] });
      }
      team.players = team.players.filter(
        (p) => p.playerId.toString() !== req.params.teammateId.toString()
      );

      const user = await User.findById(req.params.teammateId);
      user.amount +=
        (match.entryFees - (match.entryFees * match.discountPercent) / 100) *
        0.9;

      match.participants -= 1;

      if (match.participantStatus === 'Full' || match.participants < 100) {
        match.participantStatus = 'Open';
      }

      const transaction = new Transaction({
        from: 'Bluezone',
        to: 'Wallet',
        type: 'Credited',
        subType: 'Refund',
        paymentAmount:
          (match.entryFees - (match.entryFees * match.discountPercent) / 100) *
          0.9,
        user: user._id
      });

      await Promise.all([
        team.save(),
        user.save(),
        match.save(),
        transaction.save()
      ]);

      const teamWithProfile = await Team.aggregate([
        {
          $match: {
            'players.playerId': nonSchemaId(req.user._id),
            match: nonSchemaId(match._id)
          }
        },
        ...teamQueryOption
      ]);

      res.send(teamWithProfile);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

// Get teams by matchId
router.get('/matches/:id/teams', auth, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id)
      .select({ host: 1 })
      .lean();

    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    const teams = await Team.aggregate([
      { $match: { match: nonSchemaId(match._id) } },
      ...teamQueryOption
    ]);

    res.send(teams);
  } catch (err) {
    res.status(500).send();
  }
});

// Post result by matchId
router.patch('/matches/:id/result', auth, authAdmin, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id).select({
      teamType: 1,
      entryFees: 1,
      participants: 1
    });

    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    let teamFactor = 4;
    if (match.teamType === 'Squad') {
      teamFactor = 4;
    } else if (match.teamType === 'Duo') {
      teamFactor = 2;
    } else if (match.teamType === 'Solo') {
      teamFactor = 1;
    }

    const teams = await Team.find({ match: match._id });
    const totalTeams = teams.length;

    const prizeList = positionPrizeList(
      match.teamType,
      totalTeams,
      match.participants,
      match.entryFees
    );

    teams.forEach(async (team) => {
      const position = req.body[team._id];

      team.position = position;

      let positionPrizeAmount = 0;
      if (position > prizeList.length) {
        positionPrizeAmount = 0;
      } else {
        const { prize } = prizeList.find((p) => p.position === position);
        positionPrizeAmount = prize / teamFactor;
      }

      team.players.forEach(async (player) => {
        const kill = req.body[player.playerId];
        player.kill = kill;

        const killPrizeAmount = killPrize(kill, match.entryFees);

        const totalPrize = positionPrizeAmount + killPrizeAmount;

        await Promise.all([
          User.findByIdAndUpdate(player.playerId, {
            $inc: { amount: totalPrize }
          }),
          Transaction.create({
            from: 'Bluezone',
            to: 'Wallet',
            type: 'Credited',
            subType: 'Winning',
            paymentAmount: totalPrize,
            user: player.playerId
          })
        ]);
      });
      await team.save();
    });

    match.matchStatus = 'Result';
    await match.save();

    res.send(match);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get own team
router.get('/matches/:id/my-team', auth, isHonest, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id)
      .select({ host: 1 })
      .lean();
    if (!match) {
      return res.status(404).send({ errors: [{ msg: 'Match not found' }] });
    }

    const team = await Team.aggregate([
      {
        $match: {
          'players.playerId': nonSchemaId(req.user._id),
          match: nonSchemaId(match._id)
        }
      },
      ...teamQueryOption
    ]);

    res.send(team);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
