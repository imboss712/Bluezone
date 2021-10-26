import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import makeStyles from '@mui/styles/makeStyles';

import HowToStepper from '../../HowToPlay/ComponentHelper/HowToStepper';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4.75)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4.5)
    }
  },
  stepper: {
    maxWidth: 600,
    margin: '16px auto',
    textAlign: 'center'
  },
  heading: {
    color: '#282828',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(3.8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3.6)
    }
  }
}));

const HowTo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          className={classes.heading}
          title="Bluezone How To Play"
        >
          HOW TO PLAY
        </Typography>

        <Box className={classes.stepper}>
          <HowToStepper />
        </Box>

        <Divider />
      </Container>
    </Box>
  );
};

export default HowTo;
