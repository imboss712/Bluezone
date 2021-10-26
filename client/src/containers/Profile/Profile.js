import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import globalStyles from '../../ui/styles/globalStyles';
import Loading from '../../ui/Loading/Loading';
import SuspenseLoading from '../../ui/Loading/SuspenseLoading';
const Error = lazy(() => import('../../ui/Error/Error'));

const ProfileActionButton = lazy(() =>
  import('./ComponentHelper/ProfileActionButton')
);
const AvatarComponent = lazy(() => import('./ComponentHelper/AvatarComponent'));
const ProfileData = lazy(() => import('./ComponentHelper/ProfileData'));

const Profile = (props) => {
  const classes = globalStyles();

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
    return (
      <Suspense>
        <Error status={profileError.status} statusText={profileError.msg} />
      </Suspense>
    );
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

        <Box className={classes.root}>
          <Container>
            <BackButton link="/tournaments" text="Go To Tournaments" />

            <Paper className={classes.paper} variant="outlined">
              <Chip
                icon={<FaceIcon />}
                label={profile.bio}
                color="primary"
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              <Suspense>
                <AvatarComponent user={user} />
              </Suspense>

              <section style={{ marginTop: '8px', marginBottom: '12px' }}>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" gutterBottom>
                  {profile.gameName}
                </Typography>
              </section>

              <Divider sx={{ marginTop: 1 }} />

              <Suspense>
                <ProfileActionButton />
              </Suspense>

              <Divider sx={{ marginTop: 1 }} />

              <Suspense fallback={<SuspenseLoading />}>
                <ProfileData profile={profile} user={user} />
              </Suspense>
            </Paper>
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
