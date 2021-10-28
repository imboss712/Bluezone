import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

import headerStyle from '../../../ui/styles/headerStyles';

const AdminLinks = () => {
  const classes = headerStyle();

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
        <NavLink
          to="/host-tournament"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
          <MenuItem onClick={handleClose}>Host A Tournament</MenuItem>
        </NavLink>

        <NavLink
          to="/withdrawal-requests"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
          <MenuItem onClick={handleClose}>Withdrawal Requests</MenuItem>
        </NavLink>

        <NavLink
          to="/users-feedback"
          className={clsx(classes.buttonLink, classes.linkColor)}
        >
          <MenuItem onClick={handleClose}>Feedbacks</MenuItem>
        </NavLink>
      </Menu>
    </>
  );
};

export default AdminLinks;
