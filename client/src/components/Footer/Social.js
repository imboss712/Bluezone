import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';

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
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          aria-label="bluezone-twitter"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/BluezoneEsports"
          className={classes.socialIcon}
        >
          <TwitterIcon />
        </IconButton>

        <IconButton
          aria-label="bluezone-youtube"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCdgh4n22TAIXnFjt0hbUQ4Q"
          className={classes.socialIcon}
        >
          <YouTubeIcon />
        </IconButton>

        <IconButton
          aria-label="bluezone-instagram"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/bluezone.fun/"
          className={classes.socialIcon}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Social;
