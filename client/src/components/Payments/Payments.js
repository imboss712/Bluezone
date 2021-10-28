import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import BackButton from '../../ui/BackButton/BackButton';
import componentStyle from '../../ui/styles/componentStyle';

const Payments = () => {
  const classes = componentStyle();

  return (
    <>
      <HelmetComponent
        title="Payment Methods We Accept | Bluezone"
        description="We use Razorpay to accept payments on our platform. We accept all standard payment methods that Razorpay supports for accepting payments."
        url="https://www.bluezone.fun/help/payments"
        indexBehaviour="index, follow"
      />

      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Typography variant="h1" className={classes.heading}>
            Payments on Bluezone
          </Typography>

          <Typography className={classes.subHeading}>
            <b>Payments:</b>
          </Typography>

          <Typography className={classes.text}>
            We use{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razorpay.com/"
              style={{ color: '#1976D2' }}
            >
              Razorpay
            </a>{' '}
            to accept payments on our platform. You can read Razorpay{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razorpay.com/terms/"
              style={{ color: '#1976D2' }}
            >
              Terms &amp; Conditions
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razorpay.com/privacy/"
              style={{ color: '#1976D2' }}
            >
              Privacy Policy
            </a>
            . We accept all standard payment methods that Razorpay supports for
            accepting payments.
          </Typography>

          <Typography className={classes.text}>
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

          <Typography className={classes.subHeading}>
            <b>Payouts:</b>
          </Typography>

          <Typography className={classes.text}>
            We pay our users in their Bank, UPI and Paytm Wallets. More options
            will be added in the future.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Payments;
