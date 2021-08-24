import React, { lazy, Suspense } from 'react';
import { Form, Formik } from 'formik';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../../components/BackButton/BackButton';
import SuspenseLoading from '../../components/Loading/SuspenseLoading';

import validationSchema from './FormHelpers/validationSchema';

const InfoForm = lazy(() => import('./ProfileForms/InfoForm'));
const StatsForm = lazy(() => import('./ProfileForms/StatsForm'));
const AddressForm = lazy(() => import('./ProfileForms/AddressForm'));
const SocialForm = lazy(() => import('./ProfileForms/SocialForm'));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 960,
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.8, 3.75)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.6, 3.5)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
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
  profileIcon: {
    fontSize: theme.spacing(6),
    color: '#3F51B5'
  },
  stepper: {
    width: '100%'
  },
  stepperRoot: {
    padding: theme.spacing(3),
    overflow: 'auto',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 1.5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 0)
    }
  },
  buttonGroup: {
    display: 'inline-block',
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Profile = (props) => {
  const classes = useStyles();

  const {
    activeStep,
    initialValues,
    handleSubmit,
    steps,
    setActiveStep,
    edit
  } = props;

  const currentValidationSchema = validationSchema[activeStep];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className={classes.root}>
      <Container>
        {edit && <BackButton link="/dashboard" text="Back To Dashboard" />}

        <Paper
          className={classes.paper}
          variant="outlined"
          style={{ marginTop: edit ? '16px' : '32px' }}
        >
          <AccountBoxRoundedIcon className={classes.profileIcon} />

          <Typography className={classes.typography} variant="h5">
            <b>{edit ? 'Update Your Profile' : 'Create Your Profile'}</b>
          </Typography>

          <Box className={classes.stepper}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              className={classes.stepperRoot}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Formik
              initialValues={initialValues}
              validationSchema={currentValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => {
                const err = !currentValidationSchema._nodes.every(
                  (node) => typeof errors[node] === 'undefined'
                );

                const getStepContent = (stepIndex) => {
                  switch (stepIndex) {
                    case 0:
                      return (
                        <Suspense fallback={<SuspenseLoading />}>
                          <InfoForm
                            errors={errors}
                            touched={touched}
                            disable={isSubmitting ? true : false}
                          />
                        </Suspense>
                      );
                    case 1:
                      return (
                        <Suspense fallback={<SuspenseLoading />}>
                          <StatsForm
                            errors={errors}
                            touched={touched}
                            disable={isSubmitting ? true : false}
                          />
                        </Suspense>
                      );
                    case 2:
                      return (
                        <Suspense fallback={<SuspenseLoading />}>
                          <AddressForm />
                        </Suspense>
                      );
                    case 3:
                      return (
                        <Suspense fallback={<SuspenseLoading />}>
                          <SocialForm />
                        </Suspense>
                      );
                    default:
                      return 'Unknown stepIndex';
                  }
                };

                return (
                  <Form id="profile-form">
                    <Grid
                      container
                      spacing={3}
                      style={{ justifyContent: 'space-around' }}
                    >
                      {getStepContent(activeStep)}
                    </Grid>

                    <Box className={classes.buttonGroup}>
                      {activeStep > 0 && (
                        <Button
                          variant="outlined"
                          size="large"
                          disabled={
                            activeStep === 0 || (isSubmitting ? true : false)
                          }
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        color="primary"
                        disabled={isSubmitting || err ? true : false}
                        className={classes.button}
                        disableElevation
                      >
                        {activeStep === steps.length - 1 ? (
                          isSubmitting ? (
                            <>
                              {edit ? 'Updating... ' : 'Completing... '}
                              <CircularProgress
                                size={16}
                                className={classes.icon}
                              />
                            </>
                          ) : edit ? (
                            'Update Profile'
                          ) : (
                            'Complete Profile'
                          )
                        ) : (
                          'Next'
                        )}
                      </Button>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;
