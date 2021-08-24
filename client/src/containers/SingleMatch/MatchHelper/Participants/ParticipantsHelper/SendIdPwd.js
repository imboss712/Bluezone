import React from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  teamText: {
    color: theme.palette.text.secondary
  },
  root: {
    margin: 'auto'
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
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  }
}));

const SendIdPwd = (props) => {
  const classes = useStyles();

  const { tournamentId, onSendDetail } = props;

  return (
    <Box className={classes.root}>
      <Typography className={clsx(classes.teamText, classes.box)}>
        Share Room Id and Password
      </Typography>

      <Formik
        initialValues={{
          roomId: '',
          roomPwd: ''
        }}
        validationSchema={Yup.object({
          roomId: Yup.number().required('Required'),
          roomPwd: Yup.number().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            onSendDetail(tournamentId, values);
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, errors }) => (
          <Form>
            <Box className={classes.box}>
              <Field
                component={TextField}
                variant="outlined"
                name="roomId"
                label="Room Id"
                type="number"
                placeholder="Eg. 16823266"
                autoComplete="off"
                fullWidth
              />
            </Box>
            <Box className={classes.box}>
              <Field
                component={TextField}
                variant="outlined"
                name="roomPwd"
                type="number"
                label="Room Password"
                placeholder="Eg. 123456"
                autoComplete="off"
                fullWidth
              />
            </Box>

            <Box className={classes.box}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                disabled={
                  isSubmitting || errors.roomId || errors.roomPwd ? true : false
                }
                onClick={submitForm}
                disableElevation
              >
                {isSubmitting ? (
                  <>
                    Sending...{' '}
                    <CircularProgress size={16} className={classes.icon} />
                  </>
                ) : (
                  'Send Room-Id Password'
                )}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSendDetail: (matchId, roomData) =>
    dispatch(actions.sendRoomIdPwd(matchId, roomData))
});

export default connect(null, mapDispatchToProps)(SendIdPwd);
