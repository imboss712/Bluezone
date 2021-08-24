import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateRoundedIcon from '@material-ui/icons/AddPhotoAlternateRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  avatarBox: {
    padding: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  noavatar: {
    width: theme.spacing(16.5),
    height: theme.spacing(16.5),
    backgroundColor: 'orange'
  },
  avatarLoading: {
    textAlign: 'center',
    margin: theme.spacing(1.75, 0)
  }
}));

const AvatarPreview = (props) => {
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
              <Avatar alt={user.name} className={classes.noavatar}>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvatarPreview);
