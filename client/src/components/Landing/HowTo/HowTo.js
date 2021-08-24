import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import HowToStepper from '../../HowToPlay/HowToStepper';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4.75)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4.5)
    }
  },
  stepper: {
    maxWidth: 600,
    margin: '16px auto',
    textAlign: 'center'
  },
  typography: {
    color: '#282828',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3.8)
    },
    [theme.breakpoints.down('xs')]: {
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
          className={classes.typography}
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
