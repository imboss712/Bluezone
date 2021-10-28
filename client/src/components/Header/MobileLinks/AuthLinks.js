import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import * as actions from '../../../store/actions/index';
import headerStyle from '../../../ui/styles/headerStyles';

import AdminLinks from './AdminLinks';

const AuthLinks = (props) => {
  const classes = headerStyle();

  const {
    auth: { isAuthenticated, user },
    onLogout,
    onLogoutAll
  } = props;

  const handleLogout = () => {
    onLogout();
  };

  const handleLogoutAll = () => {
    onLogoutAll();
  };

  return (
    <>
      <div>
        {isAuthenticated && user && user.role === 'admin' ? (
          <AdminLinks />
        ) : null}

        <Link
          to="/tournaments"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
          <ListItem button>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Tournaments" />
          </ListItem>
        </Link>

        <Link
          to="/my-tournaments"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
          <ListItem button>
            <ListItemIcon>
              <StarBorderOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Tournaments" />
          </ListItem>
        </Link>

        <Divider variant="middle" className={classes.divider} />

        <Link
          to="/dashboard"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
        </Link>

        <Link
          to="/wallet"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Wallet" />
          </ListItem>
        </Link>

        <Link
          to="/edit-dashboard"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
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
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>

        <ListItem button onClick={handleLogoutAll}>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout All" />
        </ListItem>
      </div>
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
