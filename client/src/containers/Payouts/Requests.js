import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../store/actions/index';

import Loading from '../../components/Loading/Loading';
import BackButton from '../../components/BackButton/BackButton';
import Request from './Request/Request';

const Error = lazy(() => import('../../components/Error/Error'));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 960,
    margin: 'auto'
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.8, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.6, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  },
  typography: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  paymentIcon: {
    fontSize: theme.spacing(6),
    color: '#3F51B5'
  }
}));

const Requests = (props) => {
  const classes = useStyles();

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
        <link rel="canonical" href="https://www.bluezone.fun/payout-requests" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Withdrawal Payout Requests | Bluezone"
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/payout-requests"
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

          <Paper className={classes.paper} variant="outlined">
            <AccountBalanceWalletRoundedIcon className={classes.paymentIcon} />
            <Typography className={classes.typography} variant="h5">
              <b>Withdrawal Requests</b>
            </Typography>

            {loading ? (
              <Loading>Fetching Payouts...</Loading>
            ) : requests.length > 0 ? (
              requests.map((request) => (
                <Request key={request._id} request={request} />
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
  request: state.payout
});

const mapDispatchToProps = (dispatch) => ({
  OnGetRequests: () => dispatch(actions.getPayoutRequests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
