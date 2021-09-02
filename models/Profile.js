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
    role: {
      type: String,
      enum: [
        'IGL',
        'Sniper',
        'Assaulter',
        'Camper',
        'Fragger',
        'Medic',
        'Support'
      ],
      default: 'Assaulter'
    },
    favoriteGun: {
      type: [String],
      enum: [
        'AKM',
        'M416',
        'GROZA',
        'AUG',
        'M762',
        'Kar98K',
        'M24',
        'AWM',
        'Mk14',
        'UZI',
        'Vector',
        'M249',
        'DP-28'
      ],
      default: ['M416', 'AWM']
    },
    stats: {
      favoriteMap: {
        type: String,
        enum: ['Erangel', 'Miramar', 'Sanhok'],
        default: 'Erangel'
      },
      season: {
        type: Number,
        default: 20
      },
      server: {
        type: String,
        default: 'India'
      },
      perspective: {
        type: String,
        enum: ['TPP', 'FPP'],
        default: 'TPP'
      },
      teamType: {
        type: String,
        enum: ['Solo', 'Duo', 'Squad'],
        default: 'Squad'
      },
      rpValue: {
        type: Number,
        default: 0
      },
      kdValue: {
        type: Number,
        default: 0
      },
      tierValue: {
        type: String,
        enum: [
          'Bronze',
          'Silver',
          'Gold',
          'Platinum',
          'Diamond',
          'Crown',
          'Ace',
          'Ace Master',
          'Ace Dominator',
          'Conqueror'
        ],
        default: 'Bronze'
      }
    },
    address: {
      city: {
        type: String,
        required: true,
        trim: true
      },
      district: {
        type: String,
        required: true,
        trim: true
      },
      state: {
        type: String,
        required: true,
        trim: true
      },
      pincode: {
        type: Number,
        required: true,
        trim: true
      }
    },
    social: {
      instagram: {
        type: String,
        lowercase: true,
        trim: true
      },
      youtube: {
        type: String,
        lowercase: true,
        trim: true
      },
      twitter: {
        type: String,
        lowercase: true,
        trim: true
      },
      facebook: {
        type: String,
        lowercase: true,
        trim: true
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

profileSchema.index({ user: 1 });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
