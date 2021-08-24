import React from 'react';
import Box from '@material-ui/core/Box';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}));

const KillForm = (props) => {
  const classes = useStyles();

  const { name } = props;

  return (
    <Box className={classes.root}>
      <Field
        component={TextField}
        label="Kills"
        name={name}
        type="number"
        variant="outlined"
        size="small"
        autoComplete="off"
        inputProps={{
          min: 0,
          max: 20
        }}
      />
    </Box>
  );
};

export default KillForm;
