import React, { useEffect, useState, useCallback } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Formik, Form, Field } from 'formik';
import { TextField, RadioGroup } from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../store/actions/index';
import BackButton from '../BackButton/BackButton';

import FormikSelect from './FormikSelect';
import { satisfyItems, titleItems } from './Items';

import MathCaptcha from './MathCaptcha';
import getValue from './getValue';

const availableMathSigns = ['+', '-', '*'];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto'
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.8, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.6, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  },
  box: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.8, 2.8)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2.6, 1.5)
    }
  },
  inputLabel: {
    textAlign: 'left',
    lineHeight: 1.6,
    marginLeft: theme.spacing(0.3),
    marginBottom: theme.spacing(0.5),
    fontSize: '14px'
  },
  typography: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  feedbackIcon: {
    fontSize: theme.spacing(6),
    color: '#3f51b5'
  },
  submitBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  }
}));

const Feedback = (props) => {
  const classes = useStyles();

  const { onCreate } = props;

  const [focus, setFocus] = useState({
    satisfy: false,
    title: false,
    reason: false,
    suggestion: false
  });

  const [mathCaptcha, setMathCaptcha] = useState({
    firstNumber: '',
    secondNumber: '',
    mathSign: '',
    value: ''
  });

  const refreshCaptcha = useCallback(() => {
    const firstNumber = Math.floor(Math.random() * 11);
    const secondNumber = Math.floor(Math.random() * 11);
    const mathSign = availableMathSigns[Math.floor(Math.random() * 3)];
    const value = getValue(firstNumber, secondNumber, mathSign);

    setMathCaptcha({
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      mathSign: mathSign,
      value: value
    });
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  return (
    <>
      <Helmet>
        <title>Submit a feedback | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="Please feel free to give us any feedback or suggestions. This will help us understand your demand and improve our service and website."
        />
        <link rel="canonical" href="https://www.bluezone.fun/about/feedback" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Submit a feedback | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="Please feel free to give us any feedback or suggestions. This will help us understand your demand and improve our service and website."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/about/feedback"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Please feel free to give us any feedback or suggestions. This will help us understand your demand and improve our service and website."
        />
        <meta
          name="twitter:title"
          content="Submit a feedback | Online BGMI Tournament - Bluezone"
        />
      </Helmet>
      <Box className={classes.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Paper className={classes.paper} variant="outlined">
            <FeedbackRoundedIcon className={classes.feedbackIcon} />

            <Typography className={classes.typography} variant="h5">
              <b>Feedback</b>
            </Typography>

            <Formik
              initialValues={{
                satisfy: 'Yes',
                title: 'Account and Login related',
                reason: '',
                suggestion: '',
                value: ''
              }}
              validationSchema={Yup.object({
                satisfy: Yup.string()
                  .required('Required')
                  .oneOf(satisfyItems.map((s) => s.value)),
                title: Yup.string()
                  .required('Required')
                  .oneOf(titleItems.map((t) => t.value)),
                reason: Yup.string().required('Required'),
                suggestion: Yup.string()
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  if (Number.parseInt(values.value) !== mathCaptcha.value) {
                    alert('Incorrect Math Captcha!');
                  } else {
                    onCreate(values);
                  }
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting, errors, touched }) => (
                <Form>
                  <Box className={classes.box} style={{ textAlign: 'left' }}>
                    <FormControl component="fieldset">
                      <FormLabel className={classes.inputLabel}>
                        Do you achieve your goal?
                      </FormLabel>

                      <Field component={RadioGroup} row name="satisfy">
                        <FormControlLabel
                          value="Yes"
                          control={
                            <Radio color="primary" disabled={isSubmitting} />
                          }
                          label="Yes"
                          disabled={isSubmitting}
                        />

                        <FormControlLabel
                          value="Partially"
                          control={
                            <Radio color="primary" disabled={isSubmitting} />
                          }
                          label="Partially"
                          disabled={isSubmitting}
                        />

                        <FormControlLabel
                          value="No"
                          control={
                            <Radio color="primary" disabled={isSubmitting} />
                          }
                          label="No"
                          disabled={isSubmitting}
                        />
                      </Field>
                    </FormControl>
                  </Box>

                  <Box className={classes.box}>
                    <Typography
                      className={classes.inputLabel}
                      variant="body2"
                      color={
                        errors.title && touched.title
                          ? 'secondary'
                          : focus.title
                          ? 'primary'
                          : 'textSecondary'
                      }
                    >
                      What was the reason for your visit?
                    </Typography>

                    <FormikSelect
                      name="title"
                      items={titleItems}
                      error={errors.title && touched.title ? true : false}
                      disabled={isSubmitting ? true : false}
                      onFocus={() => setFocus({ ...focus, title: true })}
                      onBlur={() => setFocus({ ...focus, title: false })}
                    />
                  </Box>

                  <Box className={classes.box}>
                    <Typography
                      className={classes.inputLabel}
                      variant="body2"
                      color={
                        errors.reason && touched.reason
                          ? 'secondary'
                          : focus.reason
                          ? 'primary'
                          : 'textSecondary'
                      }
                    >
                      What was the reason you could not achieve your goal?
                    </Typography>

                    <Field
                      component={TextField}
                      variant="outlined"
                      name="reason"
                      type="text"
                      autoComplete="off"
                      multiline
                      minRows={2}
                      fullWidth
                      inputProps={{
                        onFocus: () => setFocus({ ...focus, reason: true }),
                        onBlur: () => setFocus({ ...focus, reason: false })
                      }}
                    />
                  </Box>

                  <Box className={classes.box}>
                    <Typography
                      className={classes.inputLabel}
                      variant="body2"
                      color={focus.suggestion ? 'primary' : 'textSecondary'}
                    >
                      Do you have any suggestions to make our website or service
                      better?
                    </Typography>

                    <Field
                      component={TextField}
                      variant="outlined"
                      name="suggestion"
                      type="text"
                      autoComplete="off"
                      multiline
                      minRows={4}
                      fullWidth
                      inputProps={{
                        onFocus: () => setFocus({ ...focus, suggestion: true }),
                        onBlur: () => setFocus({ ...focus, suggestion: false })
                      }}
                    />
                  </Box>

                  <Box className={classes.box}>
                    <MathCaptcha
                      mathCaptcha={mathCaptcha}
                      refreshCaptcha={refreshCaptcha}
                    />
                  </Box>

                  <Box className={clsx(classes.box, classes.submitBtn)}>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      disabled={
                        isSubmitting ||
                        errors.satisfy ||
                        errors.title ||
                        errors.reason
                          ? true
                          : false
                      }
                      onClick={submitForm}
                      disableElevation
                    >
                      {isSubmitting ? (
                        <>
                          Submitting...{' '}
                          <CircularProgress
                            size={16}
                            className={classes.icon}
                          />
                        </>
                      ) : (
                        'Submit'
                      )}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCreate: (feedbackData) => dispatch(actions.createFeedback(feedbackData))
});

export default connect(null, mapDispatchToProps)(Feedback);
