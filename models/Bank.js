const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema(
  {
    accountType: {
      type: String,
      required: true,
      enum: ['vpa', 'bank_account', 'paytm_wallet']
    },
    vpaAddress: {
      type: String,
      lowercase: true,
      trim: true,
      required: function () {
        return this.accountType === 'vpa';
      }
    },
    bankAccNumber: {
      type: Number,
      required: function () {
        return this.accountType === 'bank_account';
      }
    },
    bankIfsc: {
      type: String,
      trim: true,
      required: function () {
        return this.accountType === 'bank_account';
      }
    },
    accHolderName: {
      type: String,
      trim: true,
      required: function () {
        return this.accountType === 'bank_account';
      }
    },
    paytmNumber: {
      type: Number,
      maxlength: 10,
      minlength: 10,
      required: function () {
        return this.accountType === 'paytm_wallet';
      }
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

bankSchema.index({ user: 1 });

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
