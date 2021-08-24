import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../store/actions/index';

import Intro from './ProfileSection/Intro';
import Genral from './ProfileSection/Genral';
import Stats from './ProfileSection/Stats';
import ProfileAddress from './ProfileSection/Address';

import BackButton from '../../components/BackButton/BackButton';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const useStyles = makeStyles((theme) => ({
  leftBar: {
    padding: theme.spacing(2.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.25)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    },
    marginTop: theme.spacing(2),
    position: 'sticky',
    top: 10,
    bottom: 10,
    zIndex: 5
  },
  rightBar: {
    padding: theme.spacing(2.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.25)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    },
    marginTop: theme.spacing(2)
  }
}));

const Profile = (props) => {
  const classes = useStyles();

  const {
    user,
    profile: { profile, loading, profileError },
    getProfile
  } = props;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  if (loading || profile === null) {
    return <Loading>Loading Profile...</Loading>;
  }

  if (profile === null && profileError && profileError.status) {
    return <Error status={profileError.status} statusText={profileError.msg} />;
  }

  if (profile) {
    return (
      <>
        <Helmet>
          <title>
            Dashboard {user.name === undefined ? null : `- ${user.name}`} |
            Bluezone
          </title>
          <link rel="canonical" href="https://www.bluezone.fun/dashboard" />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Dashboard | Bluezone" />
          <meta
            property="og:url"
            content="https://www.bluezone.fun/dashboard"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Dashboard | Bluezone" />
        </Helmet>

        <Box>
          <Container>
            <BackButton link="/tournaments" text="Go To Tournaments" />

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={10} lg={4}>
                <Paper className={classes.leftBar} variant="outlined">
                  <Intro profile={profile} user={user} />
                </Paper>
              </Grid>

              <Grid item xs={12} md={10} lg={8}>
                <Paper variant="outlined" className={classes.rightBar}>
                  <Genral profile={profile} user={user} />
                  <Stats stats={profile.stats} />
                  <ProfileAddress address={profile.address} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(actions.getMyProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
