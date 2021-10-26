import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import makeStyles from '@mui/styles/makeStyles';

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
          size="large"
        >
          <CachedRoundedIcon size="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          padding: '3px 5px',
          borderRadius: 0.5,
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
          as={TextField}
          type="tel"
          id="value"
          name="value"
          size="small"
          inputProps={{
            size: '4'
          }}
          autoComplete="off"
        />
      </Box>
    </Paper>
  );
};

export default MathCaptcha;
