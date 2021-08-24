import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../BackButton/BackButton';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.spacing(4),
    lineHeight: 1.3,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(1.5, 0)
  },
  para: {
    marginTop: theme.spacing(1.5)
  }
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>About Us | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="Bluezone is a platform for gamers who want to feel the real challenges. Showcase your talent here, compete with the best players and win a lot of prize money."
        />
        <link rel="canonical" href="https://www.bluezone.fun/about/about-us" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Us | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="Bluezone is a platform for gamers who want to feel the real challenges. Showcase your talent here, compete with the best players and win a lot of prize money."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/about/about-us"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Bluezone is a platform for gamers who want to feel the real challenges. Showcase your talent here, compete with the best players and win a lot of prize money."
        />
        <meta
          name="twitter:title"
          content="About Us | Online BGMI Tournament - Bluezone"
        />
      </Helmet>
      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Typography variant="h1" className={classes.heading}>
            About Us
          </Typography>

          <Typography className={classes.para}>
            Bluezone is a platform for gamers who want to feel the real
            challenges. This platform is created by the gamers and dedicated to
            the gamers. This is the platform that is best to showcase your
            talent and compete with the best players and wins a lot of prize
            money. We host tournaments on daily basis.
          </Typography>

          <Typography className={classes.para}>
            This platform helps gamers to establish their own distinct identity
            in the gaming world. We organize tournaments in various modes like
            Solo, Duo, and Squad. Every weekend we have special offers for
            gamers.
          </Typography>

          <Typography className={classes.para}>
            So why are you waiting, just start participating in the tournament
            and enjoy the game?
          </Typography>

          <Typography className={classes.para}>
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
