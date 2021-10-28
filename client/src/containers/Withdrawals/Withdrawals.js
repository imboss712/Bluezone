import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import makeStyles from '@mui/styles/makeStyles';

import Withdrawal from './Withdrawal/Withdrawal';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import Loading from '../../ui/Loading/Loading';
import globalStyles from '../../ui/styles/globalStyles';
const Error = lazy(() => import('../../ui/Error/Error'));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 960,
    margin: 'auto'
  }
}));

const Withdrawals = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const {
    request: { loading, requests },
    OnGetRequests
  } = props;

  useEffect(() => {
    OnGetRequests();
  }, [OnGetRequests]);

  return (
    <>
      <Helmet>
        <title>Withdrawal Payout Requests | Bluezone</title>
        <link
          rel="canonical"
          href="https://www.bluezone.fun/withdrawal-requests"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Withdrawal Payout Requests | Bluezone"
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/withdrawal-requests"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Withdrawal Payout Requests | Bluezone"
        />
      </Helmet>

      <Box className={classes.root}>
        <Container>
          <BackButton link="/tournaments" text="Go To Tournaments" />

          <Paper className={sharedClasses.paper} variant="outlined">
            <AccountBalanceWalletRoundedIcon
              color="primary"
              className={sharedClasses.headingIcon}
            />

            <Typography className={sharedClasses.headingText} variant="h5">
              <b>Withdrawal Requests</b>
            </Typography>

            {loading ? (
              <Loading>Fetching Withdrawal Requests...</Loading>
            ) : requests.length > 0 ? (
              requests.map((request) => (
                <Withdrawal key={request._id} request={request} />
              ))
            ) : (
              <Suspense>
                <Error status="204" statusText="No withdrawal requests yet." />
              </Suspense>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  request: state.withdrawal
});

const mapDispatchToProps = (dispatch) => ({
  OnGetRequests: () => dispatch(actions.getWithdrawalRequests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Withdrawals);
