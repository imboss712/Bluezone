import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';
import AvatarForm from './AvatarForm';

import Loading from '../../components/Loading/Loading';
const Error = lazy(() => import('../../components/Error/Error'));

const UpdateAvatar = (props) => {
  const {
    history,
    onGetAvatar,
    onUpload,
    auth: { user },
    profile: { avatar, avatarLoading, avatarError }
  } = props;

  useEffect(() => {
    onGetAvatar(user._id);
  }, [onGetAvatar, user._id]);

  if (user && !user.hasAvatar) {
    return <Redirect to="/upload-avatar" />;
  }

  const submitAvatar = (value) => {
    onUpload(value, history);
  };

  if (avatarLoading || avatar === null) {
    return <Loading hideImage>Fetching Profile Image...</Loading>;
  }

  if (avatar === null && avatarError && avatarError.status) {
    return (
      <Suspense>
        <Error
          hideImage
          status={avatarError.status}
          statusText={avatarError.msg}
        />
      </Suspense>
    );
  }

  if (avatar) {
    const previewSrc = `data:image/png;base64,${avatar}`;

    return (
      <>
        <Helmet>
          <title>
            Update Avatar {user.name === undefined ? null : `- ${user.name}`} |
            Bluezone
          </title>
          <link rel="canonical" href="https://www.bluezone.fun/update-avatar" />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Update Avatar | Bluezone" />
          <meta
            property="og:url"
            content="https://www.bluezone.fun/update-avatar"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Update Avatar | Bluezone" />
        </Helmet>

        <AvatarForm submitAvatar={submitAvatar} previewImg={previewSrc} edit />
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  onGetAvatar: (userId) => dispatch(actions.getAvatar(userId)),
  onUpload: (avatarData, history) =>
    dispatch(actions.uploadAvatar(avatarData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAvatar);
