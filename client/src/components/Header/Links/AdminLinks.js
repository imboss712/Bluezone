import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonRight: {
    marginRight: theme.spacing(2)
  },
  btnLink: {
    textDecoration: 'none'
  },
  expandIcon: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(0.5)
  }
}));

const AdminLinks = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="primary"
        aria-controls="admin-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.buttonRight}
      >
        Admin <UnfoldMoreRoundedIcon className={classes.expandIcon} />
      </Button>

      <Menu
        id="admin-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to="/host-tournament" className={classes.btnLink}>
          <MenuItem onClick={handleClose}>Host A Tournament</MenuItem>
        </NavLink>

        <NavLink to="/payout-requests" className={classes.btnLink}>
          <MenuItem onClick={handleClose}>Payout Requests</MenuItem>
        </NavLink>

        <NavLink to="/users-feedback" className={classes.btnLink}>
          <MenuItem onClick={handleClose}>Feedbacks</MenuItem>
        </NavLink>
      </Menu>
    </>
  );
};

export default AdminLinks;
