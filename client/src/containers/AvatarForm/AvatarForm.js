import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import makeStyles from '@mui/styles/makeStyles';

import BackButton from '../../ui/BackButton/BackButton';
import SuspenseLoading from '../../ui/Loading/SuspenseLoading';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
import globalStyles from '../../ui/styles/globalStyles';

import { validationSchema } from './FormHelper/index';
const Preview = lazy(() => import('./FormHelper/Preview'));

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

const AvatarForm = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const { edit, submitAvatar, previewImg } = props;

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    edit && previewImg && setPreview(previewImg);
  }, [edit, previewImg]);

  return (
    <Box className={sharedClasses.root}>
      <Container>
        {edit && <BackButton link="/dashboard" text="Back To Dashboard" />}

        <Paper
          className={classes.paper}
          variant="outlined"
          sx={{ marginTop: edit ? 2 : 4 }}
        >
          <InsertPhotoRoundedIcon
            color="primary"
            className={sharedClasses.headingIcon}
          />

          <Typography className={sharedClasses.headingText} variant="h5">
            <b>{edit ? 'Update Profile Picture' : 'Upload Profile Picture'}</b>
          </Typography>

          <Formik
            initialValues={{
              avatar: null
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const formData = new FormData();
              formData.append('avatar', values.avatar);

              setTimeout(() => {
                setSubmitting(false);
                submitAvatar(formData);
              }, 500);
            }}
          >
            {({
              isSubmitting,
              values,
              handleSubmit,
              setFieldValue,
              errors,
              submitForm
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Suspense fallback={<SuspenseLoading />}>
                    <Preview
                      preview={preview}
                      values={values}
                      errors={errors}
                    />
                  </Suspense>

                  <Box className={sharedClasses.box}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      error={errors.avatar ? true : false}
                    >
                      <InputLabel htmlFor="avatar" shrink>
                        Avatar
                      </InputLabel>

                      <Input
                        id="avatar"
                        aria-describedby="avatar-helper-text"
                        name="avatar"
                        type="file"
                        onChange={(event) => {
                          setFieldValue('avatar', event.currentTarget.files[0]);
                          if (event.currentTarget.files[0]) {
                            setPreview(
                              URL.createObjectURL(event.currentTarget.files[0])
                            );
                          } else {
                            setPreview(null);
                          }
                        }}
                        inputProps={{
                          accept: 'image/*'
                        }}
                      />

                      <FormHelperText id="avatar-helper-text">
                        {errors.avatar}
                      </FormHelperText>
                    </FormControl>
                  </Box>

                  <Box
                    className={clsx(
                      sharedClasses.box,
                      sharedClasses.submitButton
                    )}
                  >
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: 'none', marginRight: '10px' }}
                    >
                      <Button size="large" color="primary">
                        {edit ? 'Cancel' : 'Skip'}
                      </Button>
                    </Link>

                    <SubmitButton
                      createText="Upload Avatar"
                      creatingText="Uploading... "
                      updateText="Update Avatar"
                      updatingText="Updating... "
                      isSubmitting={isSubmitting}
                      edit={edit}
                      disabled={isSubmitting || errors.avatar ? true : false}
                      onClick={submitForm}
                    />
                  </Box>
                </form>
              );
            }}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default AvatarForm;
