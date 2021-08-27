const express = require('express');

const Feedback = require('../models/Feedback');

const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

const router = express.Router();

// Create feedback
router.post('/', async (req, res) => {
  const { satisfy, title, reason, suggestion } = req.body;

  try {
    const feedback = new Feedback({ satisfy, title, reason, suggestion });
    await feedback.save();

    res.send(feedback);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read last 20 feedbacks (Admin Route)
router.get('/', auth, authAdmin, async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .lean()
      .sort({ createdAt: -1 })
      .limit(20);

    res.send(feedbacks);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
