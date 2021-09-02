const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 10,
      maxLength: 28,
      required: true,
      trim: true
    },
    map: {
      type: String,
      enum: ['Erangel', 'Miramar', 'Sanhok'],
      default: 'Erangel'
    },
    teamType: {
      type: String,
      enum: ['Solo', 'Duo', 'Squad'],
      default: 'Squad'
    },
    perspective: {
      type: String,
      enum: ['TPP', 'FPP'],
      default: 'TPP'
    },
    server: {
      type: String,
      default: 'India'
    },
    matchDate: {
      type: Date,
      required: true
    },
    matchTime: {
      type: String,
      required: true
    },
    entryFees: {
      type: Number,
      min: 25,
      max: 250,
      required: true
    },
    prizePool: {
      type: Number,
      required: true
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      index: true
    },
    participants: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    matchStatus: {
      type: String,
      enum: ['Open', 'MailUnsent', 'MailSent', 'Live', 'Completed', 'Result'],
      default: 'Open'
    },
    participantStatus: {
      type: String,
      enum: ['Open', 'Full', 'Closed'],
      default: 'Open'
    }
  },
  {
    timestamps: true
  }
);

matchSchema.index({ matchStatus: 1, createdAt: -1 });
matchSchema.index({ createdAt: -1 });

matchSchema.virtual('teams', {
  ref: 'Team',
  localField: '_id',
  foreignField: 'match'
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
