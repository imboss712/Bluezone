import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../BackButton/BackButton';

import HowToStepper from './HowToStepper';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto'
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.8, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.6, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  },
  typography: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  userIcon: {
    fontSize: theme.spacing(6),
    color: '#3f51b5'
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

const HowToPlay = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>How To Play | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="It is very easy to play tournaments on the Bluezone. Register your account, start playing the tournament and transfer your winnings to your bank / UPI / wallet."
        />
        <link
          rel="canonical"
          href="https://www.bluezone.fun/help/how-to-play"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="How To Play | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="It is very easy to play tournaments on the Bluezone. Register your account, start playing the tournament and transfer your winnings to your bank / UPI / wallet."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/help/how-to-play"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="It is very easy to play tournaments on the Bluezone. Register your account, start playing the tournament and transfer your winnings to your bank / UPI / wallet."
        />
        <meta
          name="twitter:title"
          content="How To Play | Online BGMI Tournament - Bluezone"
        />
      </Helmet>
      <Box className={classes.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Paper className={classes.paper} variant="outlined">
            <HelpRoundedIcon className={classes.userIcon} />

            <Typography className={classes.typography} variant="h5">
              <b>How To Play</b>
            </Typography>
            <HowToStepper />
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default HowToPlay;
