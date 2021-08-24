import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../store/actions/index';

import AdminLinks from './AdminLinks';
// import AllLinks from './AllLinks';
import Modal from '../../Modal/Modal';

const useStyles = makeStyles((theme) => ({
  buttonRight: {
    marginRight: theme.spacing(1.25)
  },
  btnLink: {
    textDecoration: 'none'
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: '#3f51b5'
  }
}));

const AuthLinks = (props) => {
  const classes = useStyles();

  const modalRef = useRef();

  const {
    auth: { isAuthenticated, user },
    avatar,
    onLogout,
    onLogoutAll
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const [modalProps, setModalProps] = useState({
    title: '',
    content: '',
    confirmText: 'OK',
    onConfirmClick: () => console.log('OK')
  });

  // Menu Open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Menu Close
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    modalRef.current.openModal();
    setModalProps({
      title: 'Logout',
      content: 'You will be logged out from this device only.',
      confirmText: 'Logout',
      onConfirmClick: () => {
        onLogout();
      }
    });
  };

  const handleLogoutAll = () => {
    handleClose();
    modalRef.current.openModal();
    setModalProps({
      title: 'Logout All',
      content: 'You will be logged out from all devices.',
      confirmText: 'Logout All',
      onConfirmClick: () => {
        onLogoutAll();
      }
    });
  };

  return (
    <>
      {isAuthenticated && user && user.role === 'admin' ? <AdminLinks /> : null}

      <NavLink
        to="/tournaments"
        className={clsx(classes.btnLink, classes.buttonRight)}
      >
        <Button color="primary">Tournaments</Button>
      </NavLink>

      <NavLink
        to="/my-tournaments"
        className={clsx(classes.btnLink, classes.buttonRight)}
      >
        <Button color="primary">My Tournaments</Button>
      </NavLink>

      {/* <AllLinks /> */}

      <IconButton
        color="primary"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {avatar !== null ? (
          <Avatar
            src={`data:image/png;base64,${avatar}`}
            alt={user ? (user.name ? user.name : 'profile') : 'profile'}
            className={classes.avatar}
          />
        ) : (
          <Avatar
            alt={user ? (user.name ? user.name : 'profile') : 'profile'}
            className={classes.avatar}
          >
            <span style={{ fontSize: '14px' }}>
              {user
                ? user.name
                  ? user.name.charAt(0).toUpperCase()
                  : 'A'
                : 'A'}
            </span>
          </Avatar>
        )}
      </IconButton>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/dashboard" className={classes.btnLink}>
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
        </Link>

        <Link to="/wallet" className={classes.btnLink}>
          <MenuItem onClick={handleClose}>My Wallet</MenuItem>
        </Link>

        <Link to="/edit-dashboard" className={classes.btnLink}>
          <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
        </Link>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem onClick={handleLogoutAll}>Logout All</MenuItem>
      </Menu>

      <Modal
        ref={modalRef}
        title={modalProps.title}
        confirmText={modalProps.confirmText}
        onConfirmClick={modalProps.onConfirmClick}
      >
        {modalProps.content}
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  avatar: state.profile.avatar
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
  onLogoutAll: () => dispatch(actions.logoutAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLinks);
