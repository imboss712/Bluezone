const express = require('express');
const crypto = require('crypto');

const auth = require('../middleware/auth');

const instance = require('../config/razorpay');

const router = express.Router();

// Create Order
router.post('/create-order', auth, async (req, res) => {
  const { amount } = req.body;

  if (amount <= 0) {
    return res
      .status(400)
      .send({ errors: [{ msg: 'Invalid amount of money' }] });
  }

  try {
    const options = {
      amount: amount * 100,
      currency: 'INR'
    };

    const order = await instance.orders.create(options);

    res.send(order);
  } catch (err) {
    res.status(500).send();
  }
});

// Verify Order
router.post('/verify-order', auth, async (req, res) => {
  const { orderId, paymentId, rzpSignature } = req.body;

  try {
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);

    hmac.update(`${orderId}|${paymentId}`);

    const expectedSignature = hmac.digest('hex');

    const isAuthentic = expectedSignature === rzpSignature;

    res.send({ isAuthentic: isAuthentic });
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
