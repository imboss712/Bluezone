const Profile = require('../models/Profile');

// middleware for checking participation eligibility
const isHonest = async (req, res, next) => {
  if (req.user.role === 'user') {
    if (!req.user.isAllowed) {
      return res
        .status(403)
        .send({ errors: [{ msg: 'Your age is less than 18 years.' }] });
    }

    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(403).send({ err: 'First create your profile.' });
    }

    next();
  } else {
    res.status(403).send({ errors: [{ msg: 'You are an Admin' }] });
  }
};

module.exports = isHonest;
