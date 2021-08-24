const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
  {
    position: {
      type: Number,
      default: 0
    },
    teamCode: {
      type: String,
      unique: true,
      required: true
    },
    players: [
      {
        kill: {
          type: Number,
          default: 0,
          max: 20
        },
        playerId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User'
        },
        label: {
          type: String,
          enum: ['Leader', 'Member'],
          required: true
        }
      }
    ],
    match: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Match',
      required: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

teamSchema.index({ match: 1, 'players.playerId': 1 });
teamSchema.index({ match: 1, teamCode: 1 });

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
