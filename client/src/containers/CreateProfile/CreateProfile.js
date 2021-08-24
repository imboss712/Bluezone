import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';

import initialValues from './FormHelpers/initialValues';
import Profile from './Profile';

const getSteps = () => {
  return ['General Information', 'Game Statistics', 'Address', 'Social Links'];
};

const CreateProfile = (props) => {
  const {
    onCreateProfile,
    history,
    auth: { isAuthenticated, user }
  } = props;

  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (isAuthenticated && user && user.isProfile) {
    return <Redirect to="/dashboard" />;
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
      onCreateProfile(newValues, history);
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
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        activeStep={activeStep}
        steps={steps}
        setActiveStep={setActiveStep}
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
