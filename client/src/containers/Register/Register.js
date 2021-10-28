import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Formik, Form, ErrorMessage } from 'formik';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

import { validationSchema } from './FormHelper/index';

import BackButton from '../../ui/BackButton/BackButton';
import globalStyles from '../../ui/styles/globalStyles';
import FormikField from '../../ui/FormComponents/FormikField';
import FormikAdornment from '../../ui/FormComponents/FormikAdornment';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
const FormNavigation = lazy(() =>
  import('../../ui/FormNavigation/FormNavigation')
);

const Register = (props) => {
  const classes = globalStyles();

  const { initialValues, handleSubmit, edit } = props;

  return (
    <Box className={classes.root}>
      <Container>
        <BackButton
          link={edit ? '/dashboard' : '/'}
          text={edit ? 'Back To Dashboard' : 'Back To Home'}
        />

        <Paper className={classes.paper} variant="outlined">
          <PersonAddRoundedIcon
            color="primary"
            className={classes.headingIcon}
          />

          <Typography className={classes.headingText} variant="h5">
            <b>{edit ? 'Update Account' : 'Register to Bluezone'}</b>
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                handleSubmit(values);
              }, 500);
            }}
          >
            {({
              submitForm,
              isSubmitting,
              setFieldValue,
              setFieldError,
              setFieldTouched,
              touched,
              errors,
              values
            }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Form>
                  <Box className={classes.box}>
                    <FormikField
                      name="name"
                      label="Name"
                      placeholder="Your Full Name"
                      error={touched.name && errors.name ? true : false}
                      disabled={isSubmitting}
                    />
                  </Box>

                  <Box className={classes.box}>
                    <DatePicker
                      disableFuture
                      label="Date of Birth"
                      inputFormat="dd/MM/yyyy"
                      openTo="year"
                      views={['year', 'month', 'day']}
                      name="dob"
                      value={values.dob}
                      onChange={(value) => setFieldValue('dob', value)}
                      onError={(value) => setFieldError('dob', value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          error={touched.dob && errors.dob ? true : false}
                          helperText={<ErrorMessage name="dob" />}
                          onBlur={(value) => setFieldTouched('dob', value)}
                        />
                      )}
                    />
                  </Box>

                  <Box className={classes.box}>
                    <FormikAdornment
                      name="phone"
                      label="Mobile Number"
                      error={touched.phone && errors.phone ? true : false}
                      disabled={isSubmitting}
                    />
                  </Box>

                  {edit ? null : (
                    <Box
                      sx={{
                        marginTop: 1.75,
                        marginRight: 4,
                        marginBottom: 1.75,
                        marginLeft: 4
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 14, color: 'text.secondary' }}
                      >
                        By signing up, you agree to our{' '}
                        <Link
                          to="/policy/terms-of-use"
                          style={{ color: '#1976D2' }}
                        >
                          Terms of Use
                        </Link>{' '}
                        and{' '}
                        <Link to="/policy/privacy" style={{ color: '#1976D2' }}>
                          Privacy Policy
                        </Link>
                      </Typography>
                    </Box>
                  )}

                  <Box className={clsx(classes.box, classes.submitButton)}>
                    <SubmitButton
                      createText="Create An Account"
                      creatingText="Creating... "
                      updateText="Update Account"
                      updatingText="Updating... "
                      isSubmitting={isSubmitting}
                      edit={edit}
                      disabled={
                        isSubmitting ||
                        errors.name ||
                        errors.dob ||
                        errors.phone
                          ? true
                          : false
                      }
                      onClick={submitForm}
                    />
                  </Box>
                </Form>
              </LocalizationProvider>
            )}
          </Formik>
        </Paper>

        {edit ? null : (
          <Suspense>
            <FormNavigation
              text="Already have an account?"
              link="/login"
              linkText="Login"
            />
          </Suspense>
        )}
      </Container>
    </Box>
  );
};

export default Register;
