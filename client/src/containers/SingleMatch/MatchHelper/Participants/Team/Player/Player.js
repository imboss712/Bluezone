import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function NewToolTip(props) {
  return <Tooltip enterDelay={500} TransitionComponent={Zoom} {...props} />;
}

const ProfileTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'transparent',
    padding: theme.spacing(0),
    maxWidth: 725,
    boxShadow: '1px 4px 25px gray'
  }
}))(NewToolTip);

const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  listItemText: {
    marginLeft: theme.spacing(2.5)
  },
  box: {
    padding: '8px 12px'
  },
  profileStatus: {
    fontSize: theme.spacing(1.875),
    color: theme.palette.text.secondary
  },
  profileUsername: {
    marginLeft: theme.spacing(0.5),
    fontSize: theme.spacing(1.75),
    color: theme.palette.text.secondary
  },
  profileLocation: {
    marginTop: theme.spacing(0.5),
    fontSize: theme.spacing(1.875),
    color: theme.palette.text.secondary
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  loadingBox: {
    padding: theme.spacing(1)
  }
}));

const Player = (props) => {
  const classes = useStyles();

  const {
    profile: {
      profile: {
        avatar,
        gameName,
        bio,
        address: { city, district, state },
        stats: { season, tierValue }
      },
      info: { name }
    }
  } = props;

  return (
    <ListItem>
      <ProfileTooltip
        title={
          <Paper variant="outlined">
            <Box className={classes.box}>
              <Typography className={classes.profileStatus}>{bio}</Typography>
            </Box>

            <Divider />
            <Box
              className={classes.box}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <section>
                {avatar !== null ? (
                  <Avatar
                    className={classes.largeAvatar}
                    src={`data:image/png;base64,${avatar}`}
                    alt={name}
                  />
                ) : (
                  <Avatar
                    alt={name}
                    className={classes.largeAvatar}
                    style={{ backgroundColor: 'orange' }}
                  >
                    <span style={{ fontSize: '28px' }}>
                      {name.charAt(0).toUpperCase()}
                    </span>
                  </Avatar>
                )}
              </section>
              <section
                style={{
                  display: 'block',
                  padding: '8px',
                  marginLeft: '8px'
                }}
              >
                <Typography>
                  {name}{' '}
                  <span className={classes.profileUsername}>{gameName}</span>
                </Typography>
                <Typography className={classes.profileLocation}>
                  <span
                    style={{
                      alignItems: 'center',
                      verticalAlign: 'middle',
                      fontSize: '10px',
                      marginRight: '4px'
                    }}
                  >
                    <LocationOnRoundedIcon />
                  </span>
                  {city}, {district}, {state}
                </Typography>
              </section>
            </Box>
            <Divider />
            <Box
              className={classes.box}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography className={classes.profileStatus}>
                Season {season}
              </Typography>

              <Typography className={classes.profileStatus}>
                <span style={{ color: '#212121' }}>Tier :</span> {tierValue}
              </Typography>
            </Box>
          </Paper>
        }
      >
        <ListItemAvatar>
          {avatar !== null ? (
            <Avatar
              className={classes.largeAvatar}
              src={`data:image/png;base64,${avatar}`}
              alt={name}
            />
          ) : (
            <Avatar
              alt={name}
              className={classes.largeAvatar}
              style={{ backgroundColor: 'orange' }}
            >
              <span style={{ fontSize: '28px' }}>
                {name.charAt(0).toUpperCase()}
              </span>
            </Avatar>
          )}
        </ListItemAvatar>
      </ProfileTooltip>

      <ListItemText
        className={classes.listItemText}
        primary={gameName}
        secondary={name}
      />
    </ListItem>
  );
};

// avatar === null ? null : URL.createObjectURL(avatar)

export default Player;
