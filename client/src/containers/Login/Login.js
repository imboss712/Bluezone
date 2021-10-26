import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';

import { initialValues, validationSchema } from './FormHelper/index';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import FormikAdornment from '../../ui/FormComponents/FormikAdornment';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
import globalStyles from '../../ui/styles/globalStyles';
const FormNavigation = lazy(() =>
  import('../../ui/FormNavigation/FormNavigation')
);

const Login = (props) => {
  const sharedClasses = globalStyles();

  const {
    auth: { loading, isAuthenticated, user },
    onLogin,
    history
  } = props;

  if (!loading && isAuthenticated) {
    return user && user.isProfile ? (
      <Redirect to="/tournaments" />
    ) : (
      <Redirect to="/create-dashboard" />
    );
  }

  return (
    <>
      <HelmetComponent
        title="Login | Bluezone"
        description="Bluezone is the best BGMI Tournament Platform in India. Log in now and start playing with your friends."
        url="https://www.bluezone.fun/login"
        indexBehaviour="index, follow"
      />

      <Box className={sharedClasses.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Paper className={sharedClasses.paper} variant="outlined">
            <VerifiedUserRoundedIcon className={sharedClasses.headingIcon} />

            <Typography className={sharedClasses.headingText} variant="h5">
              <b>Login to Bluezone</b>
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  onLogin(values, history);
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting, errors, touched }) => (
                <Form>
                  <Box className={sharedClasses.box}>
                    <FormikAdornment
                      name="phone"
                      label="Mobile Number"
                      error={touched.phone && errors.phone ? true : false}
                      disabled={isSubmitting}
                    />
                  </Box>

                  <Box
                    className={clsx(
                      sharedClasses.box,
                      sharedClasses.submitButton
                    )}
                  >
                    <SubmitButton
                      createText="Send OTP"
                      creatingText=" Sending OTP... "
                      isSubmitting={isSubmitting}
                      disabled={isSubmitting || errors.phone ? true : false}
                      onClick={submitForm}
                    />
                  </Box>
                </Form>
              )}
            </Formik>
          </Paper>

          <Suspense>
            <FormNavigation
              text="New to Bluezone?"
              link="/register"
              linkText="Create an account"
            />
          </Suspense>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (loginData, history) =>
    dispatch(actions.loginUser(loginData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
