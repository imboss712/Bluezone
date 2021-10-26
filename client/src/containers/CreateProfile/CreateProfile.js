import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';
import Profile from './Profile';

const CreateProfile = (props) => {
  const {
    onCreateProfile,
    history,
    auth: { user }
  } = props;

  if (user && user.isProfile) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (values) => {
    const { gameName, gameId, bio } = values;
    onCreateProfile({ gameName, gameId, bio }, history);
  };

  return (
    <>
      <Helmet>
        <title>
          Create Dashboard {user.name === undefined ? null : `- ${user.name}`} |
          Bluezone
        </title>
        <link
          rel="canonical"
          href="https://www.bluezone.fun/create-dashboard"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Create Dashboard | Bluezone" />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/create-dashboard"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Create Dashboard | Bluezone" />
      </Helmet>

      <Profile
        initialValues={{
          game: 'Battlegrounds Mobile India',
          gameName: '',
          gameId: '',
          bio: ''
        }}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onCreateProfile: (profileData, history) =>
    dispatch(actions.createProfile(profileData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
