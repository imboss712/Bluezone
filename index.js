const express = require('express');
const compression = require('compression');
const path = require('path');
const cors = require('cors');
const hpp = require('hpp');
const xss = require('xss-clean');
const helmet = require('helmet');
require('dotenv').config();
require('./db/mongoose');

const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profiles');
const matchRoutes = require('./routes/matches');
const teamRoutes = require('./routes/teams');
const transactionRoutes = require('./routes/transactions');
const paymentRoutes = require('./routes/payments');
const feedbackRoutes = require('./routes/feedbacks');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', "'unsafe-inline'"],
        imgSrc: [
          "'self'",
          'https://bluezone-assets.s3.ap-south-1.amazonaws.com',
          'data:',
          'blob:',
          "'unsafe-inline'"
        ],
        scriptSrc: [
          "'self'",
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          'https://checkout.razorpay.com',
          "'unsafe-inline'",
          "'unsafe-eval'"
        ],
        scriptSrcAttr: ["'unsafe-inline'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
        frameSrc: ['https://api.razorpay.com', "'unsafe-inline'"],
        prefetchSrc: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          "'unsafe-inline'"
        ],
        connectSrc: ['*', "'unsafe-inline'"],
        objectSrc: ['*', "'unsafe-inline'"],
        mediaSrc: ['*', "'unsafe-inline'"],
        frameAncestors: ["'self'"]
      }
    }
  })
);
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(compression());

app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api', matchRoutes);
app.use('/api', teamRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/feedbacks', feedbackRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`\nServer is live at port ${port}`);
});
