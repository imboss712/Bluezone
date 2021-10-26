import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Profile from './Profile';

import * as actions from '../../store/actions/index';
import Loading from '../../ui/Loading/Loading';
const Error = lazy(() => import('../../ui/Error/Error'));

const UpdateProfile = (props) => {
  const {
    history,
    auth: { user },
    profile: { loading, profile, profileError },
    onGetProfile,
    onUpdateProfile
  } = props;

  useEffect(() => {
    onGetProfile();
  }, [onGetProfile]);

  if (user && !user.isProfile) {
    return <Redirect to="/create-dashboard" />;
  }

  const handleSubmit = (values) => {
    const newValues = {
      gameName: values.gameName,
      gameId: values.gameId,
      bio: values.bio
    };
    onUpdateProfile(newValues, history);
  };

  if (loading || profile === null) {
    return <Loading>Fetching Profile Data...</Loading>;
  }

  if (profile == null && profileError && profileError.status) {
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
            Update Dashboard {user.name === undefined ? null : `- ${user.name}`}{' '}
            | Bluezone
          </title>
          <link
            rel="canonical"
            href="https://www.bluezone.fun/edit-dashboard"
          />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Update Dashboard | Bluezone" />
          <meta
            property="og:url"
            content="https://www.bluezone.fun/edit-dashboard"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Update Dashboard | Bluezone" />
        </Helmet>

        <Profile
          initialValues={{
            game: 'Battlegrounds Mobile India',
            gameName: profile.gameName,
            gameId: profile.gameId,
            bio: profile.bio
          }}
          handleSubmit={handleSubmit}
          edit
        />
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  onGetProfile: () => dispatch(actions.getMyProfile()),
  onUpdateProfile: (profileData, history) =>
    dispatch(actions.updateProfile(profileData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
