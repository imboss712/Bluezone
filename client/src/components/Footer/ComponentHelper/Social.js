import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: '#ffffff',
    fontSize: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1.5)
  },
  social: {
    marginTop: theme.spacing(1.5)
  },
  socialIcon: {
    fontSize: theme.spacing(4),
    color: '#ffffff',
    opacity: 0.9
  }
}));

const Social = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        <b>bluezone</b>
      </Typography>

      <Box className={classes.social}>
        <IconButton
          aria-label="bluezone-facebook"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Bluezone-104403925227903/"
          className={classes.socialIcon}
          size="large"
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          aria-label="bluezone-twitter"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/BluezoneEsports"
          className={classes.socialIcon}
          size="large"
        >
          <TwitterIcon />
        </IconButton>

        <IconButton
          aria-label="bluezone-youtube"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCdgh4n22TAIXnFjt0hbUQ4Q"
          className={classes.socialIcon}
          size="large"
        >
          <YouTubeIcon />
        </IconButton>

        <IconButton
          aria-label="bluezone-instagram"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/bluezone.fun/"
          className={classes.socialIcon}
          size="large"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Social;
