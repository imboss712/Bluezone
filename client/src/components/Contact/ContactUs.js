import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../BackButton/BackButton';

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
  grid: {
    width: 'auto',
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.8, 2.8)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2.6, 1.5)
    },
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(1.3)
      }
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0, 0.25)
      }
    },
    '& p': {
      margin: theme.spacing(1, 1.5),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0.95, 1.2)
      }
    }
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
  socialIcon: {
    margin: theme.spacing(0, 1)
  }
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Contact Us | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="If you have any questions or need some information, please do not hesitate to contact us. The Bluezone team is always there for you."
        />
        <link
          rel="canonical"
          href="https://www.bluezone.fun/about/contact-us"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Us | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="If you have any questions or need some information, please do not hesitate to contact us. The Bluezone team is always there for you."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/about/contact-us"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="If you have any questions or need some information, please do not hesitate to contact us. The Bluezone team is always there for you."
        />
        <meta
          name="twitter:title"
          content="Contact Us | Online BGMI Tournament - Bluezone"
        />
      </Helmet>

      <Box className={classes.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Paper className={classes.paper} variant="outlined">
            <PermContactCalendarRoundedIcon className={classes.userIcon} />

            <Typography className={classes.typography} variant="h5">
              <b>Contact Us</b>
            </Typography>

            <Grid container alignItems="center" className={classes.grid}>
              <WhatsAppIcon style={{ color: '#00bfa5' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>+91 9097352277</Typography>
            </Grid>

            <Grid container alignItems="center" className={classes.grid}>
              <MailOutlineRoundedIcon style={{ color: '#d93025' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>care.bluezone@gmail.com</Typography>
            </Grid>

            <Grid container alignItems="center" className={classes.grid}>
              <CallOutlinedIcon style={{ color: '#1a73e8' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>+91 9097352277</Typography>
            </Grid>

            <Grid container alignItems="center" className={classes.grid}>
              <WatchLaterOutlinedIcon style={{ color: '#005656' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>Tue - Sun ( 9am to 4pm )</Typography>
            </Grid>

            <Typography className={classes.typography} variant="h5">
              <b>We are social</b>
            </Typography>

            <Box>
              <IconButton
                aria-label="bluezone-facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Bluezone-104403925227903/"
                className={classes.socialIcon}
              >
                <FacebookIcon style={{ color: '#1877f2', fontSize: '28px' }} />
              </IconButton>

              <IconButton
                aria-label="bluezone-twitter"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/BluezoneEsports"
                className={classes.socialIcon}
              >
                <TwitterIcon style={{ color: '#1da1f2', fontSize: '28px' }} />
              </IconButton>

              <IconButton
                aria-label="bluezone-youtube"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCdgh4n22TAIXnFjt0hbUQ4Q"
                className={classes.socialIcon}
              >
                <YouTubeIcon style={{ color: '#f00000', fontSize: '28px' }} />
              </IconButton>

              <IconButton
                aria-label="bluezone-instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/bluezone.fun/"
                className={classes.socialIcon}
              >
                <InstagramIcon style={{ color: '#bc2a8d', fontSize: '28px' }} />
              </IconButton>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
