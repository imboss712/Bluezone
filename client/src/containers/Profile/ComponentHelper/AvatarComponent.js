import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Fab from '@mui/material/Fab';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  avatarBox: {
    padding: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'center'
  },
  avatarLoading: {
    textAlign: 'center',
    margin: theme.spacing(1.75, 0)
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  noAvatar: {
    width: theme.spacing(16.5),
    height: theme.spacing(16.5),
    backgroundColor: 'orange'
  }
}));

const AvatarComponent = (props) => {
  const classes = useStyles();

  const {
    user,
    onGetAvatar,
    onDeleteAvatar,
    avatar: { avatarLoading, avatar }
  } = props;

  useEffect(() => {
    onGetAvatar(user._id);
  }, [onGetAvatar, user._id]);

  const handleDeleteAvatar = () => {
    onDeleteAvatar();
  };

  return (
    <>
      {avatarLoading ? (
        <Box className={classes.avatarLoading}>
          <Typography color="primary" variant="body2">
            Fetching Avatar ...
          </Typography>
        </Box>
      ) : (
        <Box className={classes.avatarBox}>
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent={
              <>
                <Link to={user.hasAvatar ? '/update-avatar' : '/upload-avatar'}>
                  <Fab size="small" color="primary" aria-label="upload-avatar">
                    {user.hasAvatar ? (
                      <EditRoundedIcon />
                    ) : (
                      <AddPhotoAlternateRoundedIcon />
                    )}
                  </Fab>
                </Link>

                {user.hasAvatar && (
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="delete-avatar"
                    onClick={handleDeleteAvatar}
                  >
                    <DeleteRoundedIcon />
                  </Fab>
                )}
              </>
            }
          >
            {avatar !== null ? (
              <Avatar
                src={`data:image/png;base64,${avatar}`}
                alt={user.name}
                className={classes.avatar}
              />
            ) : (
              <Avatar alt={user.name} className={classes.noAvatar}>
                <span style={{ fontSize: '80px' }}>
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </Avatar>
            )}
          </Badge>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  avatar: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  onGetAvatar: (userId) => dispatch(actions.getAvatar(userId)),
  onDeleteAvatar: () => dispatch(actions.deleteAvatar())
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarComponent);
