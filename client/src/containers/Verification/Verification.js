import React, { lazy, Suspense, useState, useEffect, useCallback } from 'react';
import * as QueryString from 'query-string';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { validationSchema } from './FormHelper/index';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import globalStyles from '../../ui/styles/globalStyles';
import FormikAdornment from '../../ui/FormComponents/FormikAdornment';
import FormikField from '../../ui/FormComponents/FormikField';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
const FormNavigation = lazy(() =>
  import('../../ui/FormNavigation/FormNavigation')
);

const useStyles = makeStyles((theme) => ({
  timer: {
    padding: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1.2)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.9)
    },
    fontWeight: 'bold'
  }
}));

const Verification = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const isSmallScreen = useMediaQuery('(max-width:400px)');

  const {
    auth: { isAuthenticated, user },
    onVerify,
    onResend,
    history,
    location
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [resending, setResending] = useState(false);

  const reduceTimer = useCallback(() => {
    if (isMounted) {
      setTimer(60);

      let myTimer = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(myTimer);
      }, 60000);
    } else return;
  }, [isMounted]);

  const fromUrl = QueryString.parse(location.search).from;

  useEffect(() => {
    setIsMounted(true);
    reduceTimer();

    return () => setIsMounted(false);
  }, [reduceTimer]);

  if (isAuthenticated) {
    return user && user.isProfile ? (
      <Redirect to="/tournaments" />
    ) : (
      <Redirect to="/create-dashboard" />
    );
  }

  const handleResend = () => {
    setResending(true);
    onResend({
      phone: user && user.phone
    });
    setTimeout(() => {
      setResending(false);
      reduceTimer();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Verify OTP | Bluezone</title>
        <link rel="canonical" href="https://www.bluezone.fun/verify-otp" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Verify OTP | Bluezone" />
        <meta property="og:url" content="https://www.bluezone.fun/verify-otp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Verify OTP | Bluezone" />
      </Helmet>

      <Box className={sharedClasses.root}>
        <Container>
          <BackButton
            link={fromUrl === 'login' ? '/login' : '/register'}
            text={fromUrl === 'login' ? 'Back To Login' : 'Back To Register'}
          />

          <Paper className={sharedClasses.paper} variant="outlined">
            <LockOpenOutlinedIcon
              color="primary"
              className={sharedClasses.headingIcon}
            />

            <Typography variant="h5" className={sharedClasses.headingText}>
              <b>Verification Code</b>
            </Typography>

            <Formik
              initialValues={{
                phone: (user && user.phone) || '',
                code: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  onVerify(values, history);
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting, touched, errors }) => (
                <Form>
                  <Box className={sharedClasses.box}>
                    <FormikAdornment
                      name="phone"
                      label="Mobile Number"
                      error={touched.phone && errors.phone ? true : false}
                      disabled={isSubmitting}
                      readOnly={true}
                    />
                  </Box>

                  <Box className={sharedClasses.box}>
                    <FormikField
                      name="code"
                      label="Verification Code"
                      type="tel"
                      placeholder="6 digit code"
                      error={touched.code && errors.code ? true : false}
                      disabled={isSubmitting}
                    />
                  </Box>

                  <Box
                    className={sharedClasses.box}
                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    {timer === 0 ? (
                      <SubmitButton
                        variant="text"
                        createText={isSmallScreen ? 'Resend' : 'Resend Code'}
                        creatingText="Resending... "
                        isSubmitting={resending}
                        disabled={timer === 0 ? false : true}
                        onClick={handleResend}
                      />
                    ) : (
                      <Typography variant="body2" className={classes.timer}>
                        {isSmallScreen
                          ? `RESEND (${timer} s)`
                          : `RESEND IN ${timer} SECONDS`}
                      </Typography>
                    )}

                    <span style={{ marginLeft: 'auto' }}>
                      <SubmitButton
                        createText="Verify"
                        creatingText="Verifying... "
                        isSubmitting={isSubmitting}
                        disabled={isSubmitting || errors.code ? true : false}
                        onClick={submitForm}
                      />
                    </span>
                  </Box>
                </Form>
              )}
            </Formik>
          </Paper>

          <Suspense>
            <FormNavigation
              text="Wrong mobile number?"
              link={fromUrl === 'login' ? '/login' : '/register'}
              linkText="Change Number"
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
  onResend: (phoneData) => dispatch(actions.resendCode(phoneData)),
  onVerify: (verifyData, history) =>
    dispatch(actions.verifyUser(verifyData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Verification);
