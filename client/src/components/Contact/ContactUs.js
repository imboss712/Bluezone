import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import makeStyles from '@mui/styles/makeStyles';

import BackButton from '../../ui/BackButton/BackButton';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import globalStyles from '../../ui/styles/globalStyles';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: 'auto',
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2.8, 2.8)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.6, 1.5)
    },
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1.3)
      }
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0, 0.25)
      }
    },
    '& p': {
      margin: theme.spacing(1, 1.5),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0.95, 1.2)
      }
    }
  },
  socialIcon: {
    margin: theme.spacing(0, 1)
  }
}));

const ContactUs = () => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  return (
    <>
      <HelmetComponent
        title="Contact Us | Online BGMI Tournament - Bluezone"
        description="If you have any questions or need some information, please do not hesitate to contact us. The Bluezone team is always there for you."
        url="https://www.bluezone.fun/about/contact-us"
        indexBehaviour="index, follow"
      />

      <Box className={sharedClasses.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Paper className={sharedClasses.paper} variant="outlined">
            <PermContactCalendarRoundedIcon
              color="primary"
              className={sharedClasses.headingIcon}
            />

            <Typography className={sharedClasses.headingText} variant="h5">
              <b>Contact Us</b>
            </Typography>

            <Grid container alignItems="center" className={classes.grid}>
              <WhatsAppIcon sx={{ color: '#00bfa5' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>+91 9097352277</Typography>
            </Grid>

            <Grid container alignItems="center" className={classes.grid}>
              <MailOutlineRoundedIcon sx={{ color: '#d93025' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>care.bluezone@gmail.com</Typography>
            </Grid>

            <Grid container alignItems="center" className={classes.grid}>
              <CallOutlinedIcon sx={{ color: '#1a73e8' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>+91 9097352277</Typography>
            </Grid>

            <Grid container alignItems="center" className={classes.grid}>
              <WatchLaterOutlinedIcon sx={{ color: '#005656' }} />
              <Divider orientation="vertical" flexItem />
              <Typography>Tue - Sun ( 9am to 4pm )</Typography>
            </Grid>

            <Typography className={sharedClasses.headingText} variant="h5">
              <b>We are social</b>
            </Typography>

            <Box>
              <IconButton
                aria-label="bluezone-facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Bluezone-104403925227903/"
                className={classes.socialIcon}
                size="large"
              >
                <FacebookIcon sx={{ color: '#1877f2', fontSize: 28 }} />
              </IconButton>

              <IconButton
                aria-label="bluezone-twitter"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/BluezoneEsports"
                className={classes.socialIcon}
                size="large"
              >
                <TwitterIcon sx={{ color: '#1da1f2', fontSize: 28 }} />
              </IconButton>

              <IconButton
                aria-label="bluezone-youtube"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCdgh4n22TAIXnFjt0hbUQ4Q"
                className={classes.socialIcon}
                size="large"
              >
                <YouTubeIcon sx={{ color: '#f00000', fontSize: 28 }} />
              </IconButton>

              <IconButton
                aria-label="bluezone-instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/bluezone.fun/"
                className={classes.socialIcon}
                size="large"
              >
                <InstagramIcon sx={{ color: '#bc2a8d', fontSize: 28 }} />
              </IconButton>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
