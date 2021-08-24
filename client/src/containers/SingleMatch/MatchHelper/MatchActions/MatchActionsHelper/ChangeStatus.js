import React from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Formik, Form } from 'formik';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../../../store/actions/index';

import FormikSelect from '../../../../CreateMatch/FormHelper/FormikSelect';
import Error from '../../../../../components/Error/Error';

const matchStatusItems = [
  { label: 'Open', value: 'Open' },
  { label: 'MailUnsent', value: 'MailUnsent' },
  { label: 'MailSent', value: 'MailSent' },
  { label: 'Live', value: 'Live' },
  { label: 'Completed', value: 'Completed' },
  { label: 'Result', value: 'Result' }
];

const participantStatusItems = [
  { label: 'Open', value: 'Open' },
  { label: 'Full', value: 'Full' },
  { label: 'Closed', value: 'Closed' }
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
  box: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.8, 2.75)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2.6, 1.35)
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  typography: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    color: theme.palette.text.secondary
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  }
}));

const ChangeStatus = (props) => {
  const classes = useStyles();

  const {
    user,
    tournamentId,
    matchStatus,
    participantStatus,
    onChangeStatus
  } = props;

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography className={classes.typography} variant="h6">
        <b>Change Tournament Status</b>
      </Typography>

      {user.role !== 'admin' ? (
        <Error
          status="401"
          statusText="User is not allowed change status"
          hideImage
        />
      ) : (
        <Formik
          initialValues={{
            matchStatus: matchStatusItems.find((ms) => ms.value === matchStatus)
              .value,
            participantStatus: participantStatusItems.find(
              (ps) => ps.value === participantStatus
            ).value
          }}
          validationSchema={Yup.object({
            matchStatus: Yup.string()
              .required('Required')
              .oneOf(matchStatusItems.map((ms) => ms.value)),
            participantStatus: Yup.string()
              .required('Required')
              .oneOf(participantStatusItems.map((ps) => ps.value))
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              onChangeStatus(tournamentId, values);
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting, errors, touched }) => (
            <Form>
              <Grid
                container
                spacing={3}
                style={{ justifyContent: 'space-around' }}
              >
                <Grid item xs={12} sm={6}>
                  <FormikSelect
                    name="matchStatus"
                    items={matchStatusItems}
                    label="Match Status"
                    error={
                      errors.matchStatus && touched.matchStatus ? true : false
                    }
                    disabled={isSubmitting ? true : false}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormikSelect
                    name="participantStatus"
                    items={participantStatusItems}
                    label="Participation Status"
                    disabled={true}
                  />
                </Grid>

                <Box className={classes.box}>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || errors.matchStatus ? true : false}
                    onClick={submitForm}
                    disableElevation
                  >
                    {isSubmitting ? (
                      <>
                        Changing status...{' '}
                        <CircularProgress size={16} className={classes.icon} />
                      </>
                    ) : (
                      'Change Match Status'
                    )}
                  </Button>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      )}
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  onChangeStatus: (matchId, statusData) =>
    dispatch(actions.changeMatchStatus(matchId, statusData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeStatus);
