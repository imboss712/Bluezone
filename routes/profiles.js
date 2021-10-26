const express = require('express');
const multer = require('multer');

const auth = require('../middleware/auth');

const Profile = require('../models/Profile');

const { profileValidation } = require('../validation/profiles/profiles');

const router = express.Router();

// Create Profile
router.post('/', auth, async (req, res) => {
  const { errors, isValid } = profileValidation(req.body);

  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }
  try {
    const isProfile = await Profile.findOne({ user: req.user._id })
      .select({ user: 1 })
      .lean();
    if (isProfile) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Profile already exists' }] });
    }

    const profile = new Profile({ ...req.body, user: req.user._id });

    req.user.isProfile = true;

    const [myProfile] = await Promise.all([profile.save(), req.user.save()]);

    res.send(myProfile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get Own Profile
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user._id
    }).lean();

    if (!profile) {
      return res.status(404).send({ errors: [{ msg: 'Profile not found' }] });
    }

    res.send(profile);
  } catch (err) {
    res.status(500).send();
  }
});

// Get Profile by userId
router.get('/user/:userId', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.userId
    })
      .lean()
      .populate('user', 'name');

    if (!profile) {
      return res.status(404).send({ errors: [{ msg: 'Profile not found' }] });
    }

    res.send(profile);
  } catch (err) {
    res.status(500).send();
  }
});

// Update Own Profile
router.patch('/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['gameName', 'gameId', 'bio'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ errors: [{ msg: 'Invalid Updates' }] });
  }

  const { errors, isValid } = profileValidation(req.body);
  if (!isValid) {
    return res.status(400).send({ errors: errors });
  }

  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).send({ errors: [{ msg: 'Profile not found' }] });
    }

    // eslint-disable-next-line security/detect-object-injection
    updates.forEach((update) => (profile[update] = req.body[update]));

    await profile.save();

    res.send(profile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Multer configuration
const upload = multer({
  limits: {
    fileSize: 2000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
      return cb(new Error('Please upload an image in jpg, jpeg or png format'));
    }
    cb(undefined, true);
  }
});

// Post or Update Own Avatar
router.post(
  '/me/avatar',
  auth,
  upload.single('avatar'),
  async (req, res) => {
    await Profile.findOneAndUpdate(
      { user: req.user._id },
      { avatar: req.file.buffer }
    );

    req.user.hasAvatar = true;
    await req.user.save();

    res.send();
  },
  // eslint-disable-next-line no-unused-vars
  (error, req, res, next) => {
    res.status(400).send({ errors: [{ msg: error.message }] });
  }
);

// Delete Own Avatar
router.delete('/me/avatar', auth, async (req, res) => {
  await Profile.findOneAndUpdate({ user: req.user._id }, { avatar: undefined });

  req.user.hasAvatar = false;
  await req.user.save();

  res.send();
});

// Get Avatar by userId
router.get('/user/:userId/avatar', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId })
      .select('avatar')
      .lean();
    if (!profile || !profile.avatar) {
      throw new Error('Avatar not found');
    }

    res.set('Content-Type', 'application/json');
    res.send(profile);
  } catch (err) {
    res.status(404).send();
  }
});

module.exports = router;
