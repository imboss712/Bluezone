import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';
import AvatarForm from './AvatarForm';

const UploadAvatar = (props) => {
  const {
    history,
    onUpload,
    auth: { user }
  } = props;

  if (user && user.hasAvatar) {
    return <Redirect to="/dashboard" />;
  }

  const submitAvatar = (values) => {
    onUpload(values, history);
  };

  return (
    <>
      <Helmet>
        <title>
          Upload Avatar {user.name === undefined ? null : `- ${user.name}`} |
          Bluezone
        </title>
        <link rel="canonical" href="https://www.bluezone.fun/upload-avatar" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Upload Avatar | Bluezone" />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/upload-avatar"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Upload Avatar | Bluezone" />
      </Helmet>

      <AvatarForm submitAvatar={submitAvatar} />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onUpload: (avatarData, history) =>
    dispatch(actions.uploadAvatar(avatarData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadAvatar);
