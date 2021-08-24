import React, { lazy, Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';

import { favGunItems } from './FormHelpers/Items';
import Profile from './Profile';

import Loading from '../../components/Loading/Loading';
const Error = lazy(() => import('../../components/Error/Error'));

const getSteps = () => {
  return ['General Information', 'Game Statistics', 'Address', 'Social Links'];
};

const UpdateProfile = (props) => {
  const {
    history,
    auth: { user },
    profile: { loading, profile, profileError },
    onGetProfile,
    onUpdateProfile
  } = props;

  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  useEffect(() => {
    onGetProfile();
  }, [onGetProfile]);

  if (user && !user.isProfile) {
    return <Redirect to="/create-dashboard" />;
  }

  const submitForm = (values, actions) => {
    const newValues = {
      gameName: values.gameName,
      gameId: values.gameId,
      bio: values.bio,
      role: values.role,
      favoriteGun: values.favoriteGun.map((f) => f.value),
      stats: {
        favoriteMap: values.favoriteMap,
        server: values.server,
        season: values.season,
        perspective: values.perspective,
        teamType: values.teamType,
        rpValue: values.rpValue,
        kdValue: values.kdValue,
        tierValue: values.tierValue
      },
      address: {
        city: values.city,
        district: values.district,
        state: values.state,
        pincode: values.pincode
      },
      social: {
        instagram: values.instagram,
        youtube: values.youtube,
        twitter: values.twitter,
        facebook: values.facebook
      }
    };

    setTimeout(() => {
      actions.setSubmitting(false);
      onUpdateProfile(newValues, history);
    }, 500);
  };

  const handleSubmit = (values, actions) => {
    if (activeStep === steps.length - 1) {
      submitForm(values, actions);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
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
            gameName: profile.gameName,
            gameId: profile.gameId,
            bio: profile.bio,
            role: profile.role,
            favoriteGun: profile.favoriteGun.map((f) => {
              return favGunItems.find((item) => item.value === f);
            }),
            favoriteMap: profile.stats.favoriteMap,
            server: profile.stats.server,
            season: profile.stats.season,
            perspective: profile.stats.perspective,
            teamType: profile.stats.teamType,
            rpValue: profile.stats.rpValue,
            kdValue: profile.stats.kdValue,
            tierValue: profile.stats.tierValue,
            city: profile.address.city,
            district: profile.address.district,
            state: profile.address.state,
            pincode: profile.address.pincode,
            instagram: profile.social.instagram,
            youtube: profile.social.youtube,
            twitter: profile.social.twitter,
            facebook: profile.social.facebook
          }}
          handleSubmit={handleSubmit}
          activeStep={activeStep}
          steps={steps}
          setActiveStep={setActiveStep}
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
