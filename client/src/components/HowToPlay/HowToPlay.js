import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import BackButton from '../../ui/BackButton/BackButton';
import globalStyles from '../../ui/styles/globalStyles';

import HowToStepper from './ComponentHelper/HowToStepper';

const HowToPlay = () => {
  const classes = globalStyles();

  return (
    <>
      <HelmetComponent
        title="How To Play | Online BGMI Tournament - Bluezone"
        description="It is very easy to play tournaments on the Bluezone. Register your account, start playing the tournament and transfer your winnings to your bank / UPI / wallet."
        url="https://www.bluezone.fun/help/how-to-play"
        indexBehaviour="index, follow"
      />

      <Box className={classes.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Paper className={classes.paper} variant="outlined">
            <HelpRoundedIcon className={classes.headingIcon} />

            <Typography className={classes.headingText} variant="h5">
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
