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
    contentSecurityPolicy: false
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
