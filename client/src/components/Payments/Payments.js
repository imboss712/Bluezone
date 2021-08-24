import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../BackButton/BackButton';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.spacing(4),
    lineHeight: 1.3,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(1.5, 0)
  },
  subheading: {
    marginTop: theme.spacing(1.75)
  },
  para: {
    marginTop: theme.spacing(1.5)
  }
}));

const Payments = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Payment Methods We Accept | Bluezone</title>
        <meta
          name="description"
          content="We use Razorpay to accept payments on our platform.  We accept all standard payment methods that Razorpay supports for accepting payments."
        />
        <link rel="canonical" href="https://www.bluezone.fun/help/payments" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Payment Methods We Accept | Bluezone"
        />
        <meta
          property="og:description"
          content="We use Razorpay to accept payments on our platform.  We accept all standard payment methods that Razorpay supports for accepting payments."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/help/payments"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="We use Razorpay to accept payments on our platform.  We accept all standard payment methods that Razorpay supports for accepting payments."
        />
        <meta
          name="twitter:title"
          content="Payment Methods We Accept | Bluezone"
        />
      </Helmet>

      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />
          <Typography variant="h1" className={classes.heading}>
            Payments on Bluezone
          </Typography>

          <Typography className={classes.subheading}>
            <b>Payments:</b>
          </Typography>

          <Typography className={classes.para}>
            We use{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razorpay.com/"
            >
              Razorpay
            </a>{' '}
            to accept payments on our platform. You can read Razorpay{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razorpay.com/terms/"
            >
              Terms &amp; Conditions
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razorpay.com/privacy/"
            >
              Privacy Policy
            </a>
            . We accept all standard payment methods that Razorpay supports for
            accepting payments.
          </Typography>

          <Typography className={classes.para}>
            Basically, we support following payment methods:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <LocalAtmRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="UPI / QR (Google Pay, BHIM, PhonePe &amp; more)" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <CreditCardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="All major debit and credit cards (Visa, MasterCard, RuPay &amp; more)" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AccountBalanceRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="50+ Netbanking Options (All Indian banks)" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AccountBalanceWalletRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Mobile Wallets (Mobikwik, Freecharge, Airtel Money, Jio Money &amp; more)" />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Payouts:</b>
          </Typography>

          <Typography className={classes.para}>
            We currently pay our users through payout links. In the future, as
            our platform grows, we will pay our users directly to their bank
            account after uploading the required documents.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Payments;
