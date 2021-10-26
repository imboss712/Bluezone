import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import headerStyle from '../../../ui/styles/headerStyles';

const GuestLinks = () => {
  const classes = headerStyle();

  return (
    <div>
      <Link to="/login" className={classes.buttonLink}>
        <ListItem button>
          <ListItemIcon>
            <LoginOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </Link>

      <Link to="/register" className={classes.buttonLink}>
        <ListItem button>
          <ListItemIcon>
            <PersonAddOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>
      </Link>
    </div>
  );
};

export default GuestLinks;
