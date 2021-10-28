import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import FormikSelect from './ComponentHelper/FormikSelect';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
import globalStyles from '../../ui/styles/globalStyles';

import { titleItems } from './ComponentHelper/Items';
import { initialValues, validationSchema } from './ComponentHelper/index';
import MathCaptcha from './ComponentHelper/MathCaptcha';
import getValue from './ComponentHelper/getValue';

const availableMathSigns = ['+', '-', '*'];

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    textAlign: 'left',
    lineHeight: 1.6,
    marginLeft: theme.spacing(0.3),
    marginBottom: theme.spacing(0.5),
    fontSize: theme.spacing(1.75)
  }
}));

const CreateFeedback = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

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
      <HelmetComponent
        title="Submit a feedback | Online BGMI Tournament - Bluezone"
        description="Please feel free to give us any feedback or suggestions. This will help us understand your demand and improve our service and website."
        url="https://www.bluezone.fun/about/feedback"
        indexBehaviour="index, follow"
      />

      <Box className={sharedClasses.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Paper className={sharedClasses.paper} variant="outlined">
            <FeedbackRoundedIcon
              color="primary"
              className={sharedClasses.headingIcon}
            />

            <Typography className={sharedClasses.headingText} variant="h5">
              <b>Send Feedback</b>
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
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
                  <Box className={sharedClasses.box} sx={{ textAlign: 'left' }}>
                    <FormControl component="fieldset">
                      <FormLabel className={classes.inputLabel}>
                        Do you achieve your goal?
                      </FormLabel>

                      <Field as={RadioGroup} row name="satisfy">
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

                  <Box className={sharedClasses.box}>
                    <Typography
                      className={classes.inputLabel}
                      variant="body2"
                      color={
                        errors.title && touched.title
                          ? 'error'
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
                      error={touched.title && errors.title ? true : false}
                      disabled={isSubmitting}
                      onFocus={() => setFocus({ ...focus, title: true })}
                      onBlur={() => setFocus({ ...focus, title: false })}
                    />
                  </Box>

                  <Box className={sharedClasses.box}>
                    <Typography
                      className={classes.inputLabel}
                      variant="body2"
                      color={
                        errors.reason && touched.reason
                          ? 'error'
                          : focus.reason
                          ? 'primary'
                          : 'textSecondary'
                      }
                    >
                      What was the reason you could not achieve your goal?
                    </Typography>

                    <Field
                      as={TextField}
                      type="text"
                      id="reason"
                      name="reason"
                      multiline
                      minRows={2}
                      error={touched.reason && errors.reason ? true : false}
                      disabled={isSubmitting}
                      fullWidth
                      autoComplete="off"
                      inputProps={{
                        onFocus: () => setFocus({ ...focus, reason: true }),
                        onBlur: () => setFocus({ ...focus, reason: false })
                      }}
                      helperText={<ErrorMessage name="reason" />}
                    />
                  </Box>

                  <Box className={sharedClasses.box}>
                    <Typography
                      className={classes.inputLabel}
                      variant="body2"
                      color={
                        errors.suggestion && touched.suggestion
                          ? 'error'
                          : focus.suggestion
                          ? 'primary'
                          : 'textSecondary'
                      }
                    >
                      Do you have any suggestions to make our website or service
                      better?
                    </Typography>

                    <Field
                      as={TextField}
                      type="text"
                      id="suggestion"
                      name="suggestion"
                      multiline
                      minRows={4}
                      fullWidth
                      autoComplete="off"
                      error={
                        touched.suggestion && errors.suggestion ? true : false
                      }
                      disabled={isSubmitting}
                      inputProps={{
                        onFocus: () => setFocus({ ...focus, suggestion: true }),
                        onBlur: () => setFocus({ ...focus, suggestion: false })
                      }}
                      helperText={<ErrorMessage name="suggestion" />}
                    />
                  </Box>

                  <Box className={sharedClasses.box}>
                    <MathCaptcha
                      mathCaptcha={mathCaptcha}
                      refreshCaptcha={refreshCaptcha}
                    />
                  </Box>

                  <Box
                    className={clsx(
                      sharedClasses.box,
                      sharedClasses.submitButton
                    )}
                  >
                    <SubmitButton
                      createText="Submit"
                      creatingText="Submitting... "
                      isSubmitting={isSubmitting}
                      disabled={
                        isSubmitting ||
                        errors.satisfy ||
                        errors.title ||
                        errors.reason ||
                        errors.suggestion
                          ? true
                          : false
                      }
                      onClick={submitForm}
                    />
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

export default connect(null, mapDispatchToProps)(CreateFeedback);
