import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';

import ProfileContent from './ComponentHelper/ProfileContent';
import WalletBalance from './ComponentHelper/WalletBalance';
import WalletHistory from './ComponentHelper/WalletHistory';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import Loading from '../../ui/Loading/Loading';

const Error = lazy(() => import('../../ui/Error/Error'));

const useStyles = makeStyles((theme) => ({
  leftBar: {
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(1),
    position: 'sticky',
    top: 10,
    bottom: 10,
    zIndex: 5,
    textAlign: 'center'
  },
  topRightBar: {
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(1)
  },
  bottomRightBar: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 2.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5, 2)
    }
  }
}));

const Wallet = (props) => {
  const classes = useStyles();

  const {
    user,
    profile: { loading, profile, profileError },
    getProfile
  } = props;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  let profileContent = <Loading>Loading Profile...</Loading>;

  if (loading || profile === null) {
    profileContent = <Loading>Loading Profile...</Loading>;
  }

  if (profile === null && profileError && profileError.status) {
    profileContent = (
      <Suspense>
        <Error status={profileError.status} statusText={profileError.msg} />
      </Suspense>
    );
  }

  if (profile) {
    profileContent = <ProfileContent profile={profile} user={user} />;
  }

  return (
    <>
      <Helmet>
        <title>
          Wallet {user.name === undefined ? null : `- ${user.name}`} | Bluezone
        </title>
        <link rel="canonical" href="https://www.bluezone.fun/wallet" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Wallet | Bluezone" />
        <meta property="og:url" content="https://www.bluezone.fun/wallet" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Wallet | Bluezone" />
      </Helmet>

      <Box>
        <Container>
          <BackButton link="/tournaments" text="Go To Tournaments" />

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={10} lg={4}>
              <Paper className={classes.leftBar} variant="outlined">
                {profileContent}
              </Paper>
            </Grid>

            <Grid item xs={12} md={10} lg={8}>
              <Paper variant="outlined" className={classes.topRightBar}>
                <WalletBalance />
              </Paper>

              <Paper variant="outlined" className={classes.bottomRightBar}>
                <WalletHistory />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(actions.getMyProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
