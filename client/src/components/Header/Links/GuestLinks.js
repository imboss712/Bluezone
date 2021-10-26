import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Button from '@mui/material/Button';

import headerStyle from '../../../ui/styles/headerStyles';

const GuestLinks = () => {
  const classes = headerStyle();

  return (
    <>
      <NavLink
        to="/login"
        className={clsx(classes.buttonLink, classes.buttonRight)}
      >
        <Button color="primary" variant="outlined">
          Login
        </Button>
      </NavLink>

      <NavLink to="/register" className={classes.buttonLink}>
        <Button variant="contained" color="primary" disableElevation>
          Sign Up
        </Button>
      </NavLink>
    </>
  );
};

export default GuestLinks;
