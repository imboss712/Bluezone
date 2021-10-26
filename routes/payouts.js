const express = require('express');

const Payout = require('../models/Payout');

const auth = require('../middleware/auth');

const router = express.Router();

// Get last 10 payouts
router.get('/', auth, async (req, res) => {
  try {
    const payouts = await Payout.find({ user: req.user._id })
      .lean()
      .sort({ createdAt: -1 })
      .limit(10);

    res.send(payouts);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
