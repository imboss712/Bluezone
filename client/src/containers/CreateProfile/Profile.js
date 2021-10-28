import React from 'react';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import makeStyles from '@mui/styles/makeStyles';

import BackButton from '../../ui/BackButton/BackButton';
import FormikField from '../../ui/FormComponents/FormikField';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
import globalStyles from '../../ui/styles/globalStyles';

import { validationSchema } from './FormHelper/index';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.8, 3)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.6, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  }
}));

const Profile = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const { initialValues, handleSubmit, edit } = props;

  return (
    <Box className={sharedClasses.root}>
      <Container>
        {edit && <BackButton link="/dashboard" text="Back To Dashboard" />}

        <Paper
          className={classes.paper}
          variant="outlined"
          sx={{ marginTop: edit ? 2 : 4 }}
        >
          <AccountBoxRoundedIcon
            color="primary"
            className={sharedClasses.headingIcon}
          />

          <Typography className={sharedClasses.headingText} variant="h5">
            <b>{edit ? 'Update Your Profile' : 'Create Your Profile'}</b>
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
            {({ isSubmitting, errors, touched, submitForm }) => {
              return (
                <Form id="profile-form">
                  <Box className={sharedClasses.box}>
                    <Field
                      as={TextField}
                      type="text"
                      id="game"
                      label="Game"
                      name="game"
                      error={touched.game && errors.game ? true : false}
                      disabled={isSubmitting}
                      InputProps={{
                        readOnly: true
                      }}
                      fullWidth
                      autoComplete="off"
                      helperText={<ErrorMessage name="game" />}
                    />
                  </Box>

                  <Box className={sharedClasses.box}>
                    <FormikField
                      name="gameName"
                      label="In Game Name"
                      error={touched.gameName && errors.gameName ? true : false}
                      disabled={isSubmitting}
                    />
                  </Box>

                  <Box className={sharedClasses.box}>
                    <FormikField
                      name="gameId"
                      label="Game Id"
                      type="number"
                      error={touched.gameId && errors.gameId ? true : false}
                      disabled={isSubmitting}
                    />
                  </Box>

                  <Box className={sharedClasses.box}>
                    <FormikField
                      name="bio"
                      label="Signature"
                      placeholder="Your punch line.."
                      error={touched.bio && errors.bio ? true : false}
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
                      createText="Create Profile"
                      creatingText="Creating... "
                      updateText="Update Profile"
                      updatingText="Updating... "
                      isSubmitting={isSubmitting}
                      edit={edit}
                      disabled={
                        isSubmitting ||
                        errors.game ||
                        errors.gameName ||
                        errors.gameId ||
                        errors.bio
                          ? true
                          : false
                      }
                      onClick={submitForm}
                    />
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;
