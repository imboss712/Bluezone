const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    gameName: {
      type: String,
      required: true,
      trim: true
    },
    gameId: {
      type: Number,
      required: true
    },
    avatar: {
      type: Buffer
    },
    bio: {
      type: String,
      maxlength: 70,
      required: true,
      trim: true
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

profileSchema.index({ user: 1 });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
