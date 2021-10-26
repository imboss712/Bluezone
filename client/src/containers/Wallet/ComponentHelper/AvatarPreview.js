import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
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

const AvatarPreview = (props) => {
  const classes = useStyles();

  const {
    user,
    onGetAvatar,
    avatar: { avatarLoading, avatar }
  } = props;

  useEffect(() => {
    onGetAvatar(user._id);
  }, [onGetAvatar, user._id]);

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
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  avatar: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  onGetAvatar: (userId) => dispatch(actions.getAvatar(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarPreview);
