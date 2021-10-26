const mongoose = require('mongoose');

const payoutSchema = new mongoose.Schema(
  {
    to: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

payoutSchema.index({ user: 1, createdAt: -1 });

const Payout = mongoose.model('Payout', payoutSchema);

module.exports = Payout;
