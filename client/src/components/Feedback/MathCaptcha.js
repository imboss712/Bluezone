import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: theme.spacing(0.75),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(1.5, 0.75)
  }
}));

const MathCaptcha = (props) => {
  const classes = useStyles();

  const {
    mathCaptcha: { firstNumber, secondNumber, mathSign },
    refreshCaptcha
  } = props;

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Box>
        <IconButton
          aria-label="refresh-math-captcha"
          color="primary"
          onClick={refreshCaptcha}
        >
          <CachedRoundedIcon size="small" />
        </IconButton>
      </Box>

      <Box
        style={{
          padding: '3px 5px',
          borderRadius: '4px',
          backgroundColor: '#f4f7fa'
        }}
      >
        <Typography>
          <b>{`${firstNumber} ${mathSign} ${secondNumber}`}</b>
        </Typography>
      </Box>

      <Box>
        <Typography>
          <b>=</b>
        </Typography>
      </Box>

      <Box>
        <Field
          component={TextField}
          variant="outlined"
          name="value"
          type="tel"
          autoComplete="off"
          size="small"
          inputProps={{
            size: '4'
          }}
        />
      </Box>
    </Paper>
  );
};

export default MathCaptcha;
