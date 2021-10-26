import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  address: {
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    textAlign: 'center'
  },
  title: {
    color: '#FFFFFF'
  },
  text: {
    color: '#FFFFFF',
    opacity: 0.75
  }
}));

const Address = () => {
  const classes = useStyles();

  return (
    <Box className={classes.address}>
      <Typography className={classes.title} sx={{ marginBottom: 1 }}>
        CORPORATE OFFICE
      </Typography>

      <Typography className={classes.text}>
        Patna, Bihar, India 800005
      </Typography>
    </Box>
  );
};

export default Address;
