import React from 'react';
import * as Yup from 'yup';
import { add } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  KeyboardDatePicker,
  KeyboardTimePicker
} from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

import {
  teamItems,
  perspectiveItems,
  serverItems,
  mapItems,
  entryItems,
  prizePoolItems
} from './FormHelper/Items';
import FormikSelect from './FormHelper/FormikSelect';

import BackButton from '../../components/BackButton/BackButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 960,
    margin: 'auto'
  },
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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  gameIcon: {
    fontSize: theme.spacing(6),
    color: '#3F51B5'
  }
}));

const Match = (props) => {
  const classes = useStyles();

  const { initialValues, handleSubmit, edit } = props;

  return (
    <Box className={classes.root}>
      <Container>
        <BackButton
          link={edit ? `/tournaments/${initialValues._id}` : '/tournaments'}
          text={edit ? 'Back To Tournament' : 'Back To Tournaments'}
        />

        <Paper className={classes.paper} variant="outlined">
          <SportsEsportsRoundedIcon className={classes.gameIcon} />

          <Typography className={classes.typography} variant="h5">
            <b>{edit ? 'Update Tournament' : 'Host a Tournament'}</b>
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              matchDate: Yup.date().required('Required'),
              matchTime: Yup.date().required('Required'),
              teamType: Yup.string()
                .required('Required')
                .oneOf(teamItems.map((t) => t.value)),
              perspective: Yup.string()
                .required('Required')
                .oneOf(perspectiveItems.map((p) => p.value)),
              server: Yup.string()
                .required('Required')
                .oneOf(serverItems.map((s) => s.value)),
              map: Yup.string()
                .required('Required')
                .oneOf(mapItems.map((m) => m.value)),
              entryFees: Yup.number()
                .required('Required')
                .oneOf(entryItems.map((e) => e.value)),
              prizePool: Yup.number().required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                handleSubmit(values);
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting, values, errors, touched }) => {
              return (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Form>
                    <Grid
                      container
                      spacing={3}
                      style={{ justifyContent: 'space-around' }}
                    >
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={KeyboardDatePicker}
                          disablePast
                          autoOk
                          maxDate={add(new Date(), { months: 1 })}
                          inputVariant="outlined"
                          format="dd-MM-yyyy"
                          name="matchDate"
                          label="Match Date"
                          placeholder="DD-MM-YYYY"
                          InputAdornmentProps={{ position: 'end' }}
                          autoComplete="off"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Field
                          component={KeyboardTimePicker}
                          inputVariant="outlined"
                          autoOk
                          format="hh:mm a"
                          name="matchTime"
                          label="Match Time"
                          placeholder="HH:MM AM"
                          InputAdornmentProps={{ position: 'end' }}
                          autoComplete="off"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FormikSelect
                          name="map"
                          items={mapItems}
                          label="Map"
                          error={errors.map && touched.map ? true : false}
                          disabled={isSubmitting || edit ? true : false}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FormikSelect
                          name="teamType"
                          items={teamItems}
                          label="Team Type"
                          error={
                            errors.teamType && touched.teamType ? true : false
                          }
                          disabled={isSubmitting || edit ? true : false}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FormikSelect
                          name="perspective"
                          items={perspectiveItems}
                          label="Perspective"
                          error={
                            errors.perspective && touched.perspective
                              ? true
                              : false
                          }
                          disabled={isSubmitting || edit ? true : false}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FormikSelect
                          name="server"
                          items={serverItems}
                          label="Server"
                          error={errors.server && touched.server ? true : false}
                          disabled={isSubmitting || edit ? true : false}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FormikSelect
                          name="entryFees"
                          items={entryItems}
                          label="Entry"
                          error={
                            errors.entryFees && touched.entryFees ? true : false
                          }
                          disabled={isSubmitting || edit ? true : false}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          value={
                            values.entryFees *
                            100 *
                            prizePoolItems.find(
                              (pp) => pp.type === values.teamType
                            ).value
                          }
                          variant="outlined"
                          name="prizePool"
                          type="text"
                          label="Prize"
                          InputProps={{
                            readOnly: true
                          }}
                          error={
                            errors.prizePool && touched.prizePool ? true : false
                          }
                          fullWidth
                        />
                      </Grid>
                    </Grid>

                    <Box className={classes.box}>
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        disabled={
                          isSubmitting ||
                          errors.matchDate ||
                          errors.matchTime ||
                          errors.teamType ||
                          errors.map ||
                          errors.entryFees ||
                          errors.prizePool
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
                          'Update Tournament'
                        ) : (
                          'Create Tournament'
                        )}
                      </Button>
                    </Box>
                  </Form>
                </MuiPickersUtilsProvider>
              );
            }}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default Match;
