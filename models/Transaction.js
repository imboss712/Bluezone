const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      enum: ['Wallet', 'Bluezone', 'Bank'],
      default: 'Wallet'
    },
    to: {
      type: String,
      enum: ['Wallet', 'Bluezone', 'Bank'],
      default: 'Bluezone'
    },
    type: {
      type: String,
      enum: ['Debited', 'Credited'],
      default: 'Debited'
    },
    subType: {
      type: String,
      enum: ['Deposit', 'Withdraw', 'Participation', 'Winning', 'Refund'],
      default: 'Participation'
    },
    paymentAmount: {
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

transactionSchema.index({ user: 1, createdAt: -1 });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
