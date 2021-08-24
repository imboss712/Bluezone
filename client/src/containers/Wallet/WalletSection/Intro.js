import React, { lazy, Suspense } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { makeStyles } from '@material-ui/core/styles';

import SocialLink from '../../Profile/ProfileHelper/SocialLink';
const AvatarPreview = lazy(() => import('./AvatarPreview'));

const useStyles = makeStyles((theme) => ({
  username: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.5)
  },
  bioBox: {
    display: 'flex',
    justifyContent: 'center'
  },
  bio: {
    marginBottom: theme.spacing(1)
  },
  profileLocation: {
    marginTop: theme.spacing(1.5),
    color: theme.palette.text.secondary
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

const Intro = (props) => {
  const classes = useStyles();

  const {
    user,
    profile: {
      bio,
      gameName,
      address: { city, district, state },
      social: { instagram, youtube, twitter, facebook }
    }
  } = props;

  return (
    <>
      <Box className={classes.bioBox}>
        <Chip
          icon={<FaceIcon />}
          label={bio}
          color="primary"
          variant="outlined"
          className={classes.bio}
        />
      </Box>

      <Suspense>
        <AvatarPreview user={user} />
      </Suspense>

      <section className={classes.username}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" gutterBottom>
          {gameName}
        </Typography>
      </section>

      <Divider />

      <Typography className={classes.profileLocation}>
        <span
          style={{
            verticalAlign: 'middle',
            fontSize: '10px',
            marginRight: '5px'
          }}
        >
          <LocationOnRoundedIcon />
        </span>
        {city}, {district}, {state}
      </Typography>

      <SocialLink
        instagram={instagram}
        facebook={facebook}
        youtube={youtube}
        twitter={twitter}
      />
    </>
  );
};

export default Intro;
