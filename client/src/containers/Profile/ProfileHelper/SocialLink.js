import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const SocialLink = (props) => {
  const { instagram, facebook, youtube, twitter } = props;

  return (
    <>
      {instagram && (
        <IconButton
          aria-label="my-instagram"
          target="_blank"
          rel="noopener noreferrer"
          href={instagram}
        >
          <InstagramIcon />
        </IconButton>
      )}

      {facebook && (
        <IconButton
          aria-label="my-facebook"
          target="_blank"
          rel="noopener noreferrer"
          href={facebook}
        >
          <FacebookIcon />
        </IconButton>
      )}

      {youtube && (
        <IconButton
          aria-label="my-youtube"
          target="_blank"
          rel="noopener noreferrer"
          href={youtube}
        >
          <YouTubeIcon />
        </IconButton>
      )}

      {twitter && (
        <IconButton
          aria-label="my-twitter"
          target="_blank"
          rel="noopener noreferrer"
          href={twitter}
        >
          <TwitterIcon />
        </IconButton>
      )}
    </>
  );
};

export default SocialLink;
