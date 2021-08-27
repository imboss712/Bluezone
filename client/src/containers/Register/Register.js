import React, { lazy, Suspense } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CircularProgress from '@material-ui/core/CircularProgress';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../../components/BackButton/BackButton';

const LoginBox = lazy(() => import('./RegisterHelper/LoginBox'));

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
  typography: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  agree: {
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(1.74)
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  userIcon: {
    fontSize: theme.spacing(6),
    color: '#3f51b5'
  },
  submitBtn: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const Register = (props) => {
  const classes = useStyles();

  const { initialValues, handleSubmit, edit } = props;

  return (
    <Box className={classes.root}>
      <Container>
        <BackButton
          link={edit ? '/dashboard' : '/'}
          text={edit ? 'Back To Dashboard' : 'Back To Home'}
        />

        <Paper className={classes.paper} variant="outlined">
          <PersonAddRoundedIcon className={classes.userIcon} />

          <Typography className={classes.typography} variant="h5">
            <b>{edit ? 'Update Account' : 'Register to Bluezone'}</b>
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              name: Yup.string().required('Required').min(3).max(50),
              dob: Yup.date().required('Required'),
              phone: Yup.string()
                .required('Required')
                .matches(/^[6-9]\d{9}$/, 'Invalid Mobile Number')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                handleSubmit(values);
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting, errors }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Form>
                  <Box className={classes.box}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      name="name"
                      type="text"
                      label="Name"
                      autoComplete="name"
                      fullWidth
                    />
                  </Box>

                  <Box className={classes.box}>
                    <Field
                      component={KeyboardDatePicker}
                      disableFuture
                      autoOk
                      openTo="year"
                      inputVariant="outlined"
                      format="dd-MM-yyyy"
                      views={['year', 'month', 'date']}
                      name="dob"
                      label="Date of Birth"
                      placeholder="DD-MM-YYYY"
                      InputAdornmentProps={{ position: 'end' }}
                      autoComplete="bday"
                      fullWidth
                    />
                  </Box>

                  <Box className={classes.box}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      name="phone"
                      type="tel"
                      label="Mobile Number"
                      disabled={edit ? true : false}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        )
                      }}
                      autoComplete="off"
                      fullWidth
                    />
                  </Box>

                  {edit ? null : (
                    <Box style={{ margin: '14px 33px' }}>
                      <Typography className={classes.agree}>
                        By signing up, you agree to our{' '}
                        <Link to="/policy/terms-of-use">Terms of Use</Link> and{' '}
                        <Link to="/policy/privacy">Privacy Policy</Link>
                      </Typography>
                    </Box>
                  )}

                  <Box className={clsx(classes.box, classes.submitBtn)}>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      disabled={
                        isSubmitting ||
                        errors.name ||
                        errors.dob ||
                        errors.phone
                          ? true
                          : false
                      }
                      onClick={submitForm}
                      disableElevation
                    >
                      {isSubmitting ? (
                        <>
                          {edit ? 'Updating... ' : 'Creating... '}
                          <CircularProgress
                            size={16}
                            className={classes.icon}
                          />
                        </>
                      ) : edit ? (
                        'Update Account'
                      ) : (
                        'Create An Account'
                      )}
                    </Button>
                  </Box>
                </Form>
              </MuiPickersUtilsProvider>
            )}
          </Formik>
        </Paper>

        {edit ? null : (
          <Suspense>
            <LoginBox />
          </Suspense>
        )}
      </Container>
    </Box>
  );
};

export default Register;
