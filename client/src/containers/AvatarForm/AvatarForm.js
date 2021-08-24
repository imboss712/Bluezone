import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../../components/BackButton/BackButton';
import SuspenseLoading from '../../components/Loading/SuspenseLoading';

import { validationSchema } from './FormHelper/FormHelper';

const Preview = lazy(() => import('./FormHelper/Preview'));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto'
  },
  paper: {
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
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  userIcon: {
    fontSize: theme.spacing(6),
    color: '#3F51B5'
  },
  preview: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    margin: '8px auto 24px auto'
  },
  submitBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between'
    }
  }
}));

const AvatarForm = (props) => {
  const classes = useStyles();

  const { edit, submitAvatar, previewImg } = props;

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    edit && previewImg && setPreview(previewImg);
  }, [edit, previewImg]);

  return (
    <Box className={classes.root}>
      <Container>
        {edit && <BackButton link="/dashboard" text="Back To Dashboard" />}

        <Paper
          className={classes.paper}
          variant="outlined"
          style={{ marginTop: edit ? '16px' : '32px' }}
        >
          <InsertPhotoRoundedIcon className={classes.userIcon} />
          <Typography className={classes.typography} variant="h5">
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

                  <Box className={classes.box}>
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

                  <Box className={clsx(classes.box, classes.submitBtn)}>
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: 'none', marginRight: '10px' }}
                    >
                      <Button size="large" color="primary">
                        {edit ? 'Cancel' : 'Skip'}
                      </Button>
                    </Link>

                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting || errors.avatar ? true : false}
                      onClick={submitForm}
                      disableElevation
                    >
                      {isSubmitting ? (
                        <>
                          {edit ? 'Updating... ' : 'Uploading... '}
                          <CircularProgress
                            size={16}
                            className={classes.icon}
                          />
                        </>
                      ) : edit ? (
                        'Update Avatar'
                      ) : (
                        'Upload Avatar'
                      )}
                    </Button>
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
