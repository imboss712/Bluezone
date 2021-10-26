import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

import BackButton from '../../ui/BackButton/BackButton';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import componentStyle from '../../ui/styles/componentStyle';

const AboutUs = () => {
  const classes = componentStyle();

  return (
    <>
      <HelmetComponent
        title="About Us | Online BGMI Tournament - Bluezone"
        description="Bluezone is a platform for gamers who want to feel the real challenges. Showcase your talent here, compete with the best players and win a lot of prize money."
        url="https://www.bluezone.fun/about/about-us"
        indexBehaviour="index, follow"
      />

      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Typography variant="h1" className={classes.heading}>
            About Us
          </Typography>

          <Typography className={classes.text}>
            Bluezone is a platform for gamers who want to feel the real
            challenges. This platform is created by the gamers and dedicated to
            the gamers. This is the platform that is best to showcase your
            talent and compete with the best players and wins a lot of prize
            money. We host tournaments on daily basis.
          </Typography>

          <Typography className={classes.text}>
            This platform helps gamers to establish their own distinct identity
            in the gaming world. We organize tournaments in various modes like
            Solo, Duo, and Squad. Every weekend we have special offers for
            gamers.
          </Typography>

          <Typography className={classes.text}>
            So why are you waiting, just start participating in the tournament
            and enjoy the game?
          </Typography>

          <Typography className={classes.text}>
            <strong>Some of the best features of our platform:</strong>
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <BlockOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="No Ads" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <EventAvailableOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Daily tournaments" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LiveHelpOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="24 x 7 Customer service" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <VerifiedUserOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Easy and secure payments" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ThumbUpAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Full transparency" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <SportsEsportsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Single match tournament" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocalAtmOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Instant payout" />
            </ListItem>
          </List>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
