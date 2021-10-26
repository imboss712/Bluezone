const teamQueryOption = [
  { $unwind: '$players' },
  {
    $lookup: {
      from: 'profiles',
      localField: 'players.playerId',
      foreignField: 'user',
      as: 'players.profile'
    }
  },
  {
    $lookup: {
      from: 'users',
      localField: 'players.playerId',
      foreignField: '_id',
      as: 'players.info'
    }
  },
  {
    $project: {
      position: 1,
      teamCode: 1,
      match: 1,
      'players.kill': 1,
      'players.playerId': 1,
      'players.label': 1,
      'players.profile.avatar': 1,
      'players.profile.gameName': 1,
      'players.info.name': 1,
      'players.profile.bio': 1
    }
  },
  { $unwind: '$players.profile' },
  { $unwind: '$players.info' },
  {
    $group: {
      _id: {
        teamId: '$_id',
        teamCode: '$teamCode',
        match: '$match',
        position: '$position'
      },
      players: {
        $push: '$players'
      }
    }
  }
];

module.exports = { teamQueryOption };
