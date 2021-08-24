import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import * as actions from '../../../store/actions/index';

import AdminLinks from './AdminLinks';
// import AllLinks from './AllLinks';
import Modal from '../../Modal/Modal';

const useStyles = makeStyles((theme) => ({
  btnLink: {
    textDecoration: 'none'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const AuthLinks = (props) => {
  const classes = useStyles();

  const modalRef = useRef();

  const {
    auth: { isAuthenticated, user },
    onLogout,
    onLogoutAll
  } = props;

  const [modalProps, setModalProps] = useState({
    title: '',
    content: '',
    confirmText: 'OK',
    onConfirmClick: () => console.log('OK')
  });

  const handleLogout = () => {
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
      <div>
        {isAuthenticated && user && user.role === 'admin' ? (
          <AdminLinks />
        ) : null}

        <Link to="/tournaments" className={classes.btnLink}>
          <ListItem button>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Tournaments" />
          </ListItem>
        </Link>

        <Link to="/my-tournaments" className={classes.btnLink}>
          <ListItem button>
            <ListItemIcon>
              <StarBorderOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Tournaments" />
          </ListItem>
        </Link>

        <Divider variant="middle" className={classes.divider} />

        {/* <AllLinks /> */}

        <Link to="/dashboard" className={classes.btnLink}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
        </Link>

        <Link to="/wallet" className={classes.btnLink}>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Wallet" />
          </ListItem>
        </Link>

        <Link to="/edit-dashboard" className={classes.btnLink}>
          <ListItem button>
            <ListItemIcon>
              <EditOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
        </Link>

        <Divider variant="middle" className={classes.divider} />

        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>

        <ListItem button onClick={handleLogoutAll}>
          <ListItemIcon>
            <ExitToAppRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout All" />
        </ListItem>
      </div>

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
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
  onLogoutAll: () => dispatch(actions.logoutAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLinks);
