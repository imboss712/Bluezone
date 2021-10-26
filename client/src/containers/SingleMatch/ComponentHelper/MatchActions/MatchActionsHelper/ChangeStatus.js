import React, { lazy, Suspense } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../../../../store/actions/index';

import FormikSelect from '../../../../../ui/FormComponents/FormikSelect';
import SubmitButton from '../../../../../ui/SubmitButton/SubmitButton';
const Error = lazy(() => import('../../../../../ui/Error/Error'));

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
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.8, 3.75)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.6, 3.5)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  },
  box: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2.8, 2.75)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.6, 1.35)
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    color: theme.palette.text.secondary
  }
}));

const ChangeStatus = (props) => {
  const classes = useStyles();

  const { user, tournamentId, matchStatus, participantStatus, onChangeStatus } =
    props;

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography className={classes.headingText} variant="h6">
        <b>Change Tournament Status</b>
      </Typography>

      {user.role !== 'admin' ? (
        <Suspense>
          <Error
            status="401"
            statusText="User is not allowed change status"
            hideImage
          />
        </Suspense>
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
                sx={{ justifyContent: 'space-around' }}
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
                  <SubmitButton
                    createText="Change Match Status"
                    creatingText="Changing status..."
                    isSubmitting={isSubmitting}
                    disabled={isSubmitting || errors.matchStatus ? true : false}
                    onClick={submitForm}
                  />
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
