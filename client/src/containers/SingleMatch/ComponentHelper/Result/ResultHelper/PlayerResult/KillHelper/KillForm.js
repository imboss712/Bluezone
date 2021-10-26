import React from 'react';
import Box from '@mui/material/Box';
import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';

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
        as={TextField}
        type="number"
        id={name}
        label="Kills"
        name={name}
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
