import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formatISO } from 'date-fns';

import Register from './Register';

import * as actions from '../../store/actions/index';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';

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
      <HelmetComponent
        title="Create an Account | Bluezone"
        description="Bluezone is the #1 earning platform for BGMI Gamers in India. Register now and start winning by participating in the BGMI tournaments."
        url="https://www.bluezone.fun/register"
        indexBehaviour="index, follow"
      />

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
