const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    satisfy: {
      type: String,
      enum: ['Yes', 'Partially', 'No'],
      default: 'Yes'
    },
    title: {
      type: String,
      enum: [
        'Account and Login related',
        'Issues with OTP',
        'Website related',
        'User Interface related',
        'Game related',
        'Payment and Refund related',
        'Customer Service related',
        'Seeking Information',
        'Have Suggestions',
        'Compliments',
        'Other'
      ],
      default: 'Account and Login related'
    },
    reason: {
      type: String
    },
    suggestion: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

feedbackSchema.index({ createdAt: -1 });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
