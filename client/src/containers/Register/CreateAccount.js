import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formatISO } from 'date-fns';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';

import Register from './Register';

const CreateAccount = (props) => {
  const {
    auth: { isAuthenticated, user },
    onCreateAccount,
    history
  } = props;

  if (isAuthenticated) {
    return user && user.isProfile ? (
      <Redirect to="/tournaments" />
    ) : (
      <Redirect to="/create-dashboard" />
    );
  }

  const handleSubmit = (values) => {
    onCreateAccount(
      {
        ...values,
        dob: formatISO(new Date(values.dob), {
          representation: 'date'
        })
      },
      history
    );
  };

  return (
    <>
      <Helmet>
        <title>Create an Account | Bluezone</title>
        <meta
          name="description"
          content="Bluezone is the #1 earning platform for BGMI Gamers in India. Register now and start winning by participating in the BGMI tournaments."
        />
        <link rel="canonical" href="https://www.bluezone.fun/register" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Create an Account | Bluezone" />
        <meta
          property="og:description"
          content="Bluezone is the #1 earning platform for BGMI Gamers in India. Register now and start winning by participating in the BGMI tournaments."
        />
        <meta property="og:url" content="https://www.bluezone.fun/register" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Bluezone is the #1 earning platform for BGMI Gamers in India. Register now and start winning by participating in the BGMI tournaments."
        />
        <meta name="twitter:title" content="Create an Account | Bluezone" />
      </Helmet>

      <Register
        initialValues={{
          name: '',
          dob: null,
          phone: ''
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
  onCreateAccount: (registerData, history) =>
    dispatch(actions.registerUser(registerData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
