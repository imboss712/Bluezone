const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: Number,
      required: true,
      unique: true,
      maxlength: 10,
      minlength: 10
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    dob: {
      type: Date,
      required: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    amount: {
      type: Number,
      default: 0
    },
    requestedAmount: {
      type: Number,
      default: 0,
      index: true
    },
    isAllowed: {
      type: Boolean,
      default: false
    },
    isProfile: {
      type: Boolean,
      default: false
    },
    isBank: {
      type: Boolean,
      default: false
    },
    hasAvatar: {
      type: Boolean,
      default: false
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.index({ phone: 1 });

userSchema.virtual('profile', {
  ref: 'Profile',
  localField: '_id',
  foreignField: 'user'
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.tokens;

  return userObject;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
