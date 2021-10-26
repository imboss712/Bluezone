import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  }
}));

const Player = (props) => {
  const classes = useStyles();

  const {
    profile: {
      profile: { avatar, gameName },
      info: { name }
    }
  } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        {avatar !== null ? (
          <Avatar
            className={classes.avatar}
            src={`data:image/png;base64,${avatar}`}
            alt={name}
          />
        ) : (
          <Avatar
            alt={name}
            className={classes.avatar}
            sx={{ backgroundColor: 'orange' }}
          >
            <span style={{ fontSize: '28px' }}>
              {name.charAt(0).toUpperCase()}
            </span>
          </Avatar>
        )}
      </ListItemAvatar>

      <ListItemText
        sx={{ marginLeft: 2.5 }}
        primary={gameName}
        secondary={name}
      />
    </ListItem>
  );
};

export default Player;
