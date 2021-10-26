import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import makeStyles from '@mui/styles/makeStyles';

import BackButton from '../../ui/BackButton/BackButton';
import FormikField from '../../ui/FormComponents/FormikField';
import FormikSelect from '../../ui/FormComponents/FormikSelect';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
import globalStyles from '../../ui/styles/globalStyles';

import {
  teamItems,
  perspectiveItems,
  serverItems,
  mapItems,
  entryItems,
  prizePoolItems,
  validationSchema
} from './FormHelper/index';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 960,
    margin: 'auto'
  }
}));

const Match = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const { initialValues, handleSubmit, edit } = props;

  return (
    <Box className={classes.root}>
      <Container>
        <BackButton
          link={edit ? `/tournaments/${initialValues._id}` : '/tournaments'}
          text={edit ? 'Back To Tournament' : 'Back To Tournaments'}
        />

        <Paper className={sharedClasses.paper} variant="outlined">
          <SportsEsportsRoundedIcon className={sharedClasses.headingIcon} />

          <Typography className={sharedClasses.headingText} variant="h5">
            <b>{edit ? 'Update Tournament' : 'Host a Tournament'}</b>
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
              values,
              errors,
              touched
            }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Form>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-around' }}
                  >
                    <Grid item xs={12}>
                      <FormikField
                        name="title"
                        label="Title"
                        error={touched.title && errors.title ? true : false}
                        disabled={isSubmitting || edit ? true : false}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        disablePast
                        inputFormat="dd/MM/yyyy"
                        label="Match Date"
                        name="matchDate"
                        value={values.matchDate}
                        onChange={(value) => setFieldValue('matchDate', value)}
                        onError={(value) => setFieldError('matchDate', value)}
                        disabled={isSubmitting}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            error={
                              touched.matchDate && errors.matchDate
                                ? true
                                : false
                            }
                            helperText={<ErrorMessage name="matchDate" />}
                            onBlur={(value) =>
                              setFieldTouched('matchDate', value)
                            }
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TimePicker
                        inputFormat="hh:mm a"
                        label="Match Time"
                        name="matchTime"
                        value={values.matchTime}
                        placeholder="HH:MM AM"
                        onChange={(value) => setFieldValue('matchTime', value)}
                        onError={(value) => setFieldError('matchTime', value)}
                        disabled={isSubmitting}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            error={
                              touched.matchTime && errors.matchTime
                                ? true
                                : false
                            }
                            helperText={<ErrorMessage name="matchTime" />}
                            onBlur={(value) =>
                              setFieldTouched('matchTime', value)
                            }
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormikSelect
                        name="map"
                        items={mapItems}
                        label="Map"
                        error={touched.map && errors.map ? true : false}
                        disabled={isSubmitting || edit ? true : false}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormikSelect
                        name="teamType"
                        items={teamItems}
                        label="Team Type"
                        error={
                          touched.teamType && errors.teamType ? true : false
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
                          touched.perspective && errors.perspective
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
                        as={TextField}
                        type="text"
                        id="prizePool"
                        label="Prize"
                        name="prizePool"
                        value={
                          values.entryFees *
                          100 *
                          prizePoolItems.find(
                            (pp) => pp.type === values.teamType
                          ).value
                        }
                        error={
                          errors.prizePool && touched.prizePool ? true : false
                        }
                        disabled={isSubmitting || edit ? true : false}
                        InputProps={{
                          readOnly: true
                        }}
                        fullWidth
                        autoComplete="off"
                        helperText={<ErrorMessage name="prizePool" />}
                      />
                    </Grid>
                  </Grid>

                  <Box className={sharedClasses.box}>
                    <SubmitButton
                      createText="Create Tournament"
                      creatingText="Creating... "
                      updateText="Update Tournament"
                      updatingText="Updating... "
                      isSubmitting={isSubmitting}
                      edit={edit}
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
                    />
                  </Box>
                </Form>
              </LocalizationProvider>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default Match;
