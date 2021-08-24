import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  linkTitle: {
    color: '#FFFFFF'
  },
  link: {
    color: '#FFFFFF',
    opacity: 0.75
  },
  address: {
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    textAlign: 'center'
  }
}));

const Address = () => {
  const classes = useStyles();

  return (
    <Box className={classes.address}>
      <Typography className={classes.linkTitle} style={{ marginBottom: '8px' }}>
        CORPORATE OFFICE
      </Typography>
      <Typography className={classes.link}>
        Patna, Bihar, India 800005
      </Typography>
    </Box>
  );
};

export default Address;
