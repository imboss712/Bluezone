const express = require('express');

const Transaction = require('../models/Transaction');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id })
      .lean()
      .sort({ createdAt: -1 })
      .limit(20);

    res.send(transactions);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
