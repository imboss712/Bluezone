import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

import headerStyle from '../../../ui/styles/headerStyles';

const AdminLinks = () => {
  const classes = headerStyle();

  return (
    <>
      <Link
        to="/host-tournament"
        className={clsx(classes.buttonLink, classes.linkColor)}
      >
        <ListItem button>
          <ListItemIcon>
            <AddCircleOutlineOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Host A Tournament" />
        </ListItem>
      </Link>

      <Link
        to="/withdrawal-requests"
        className={clsx(classes.buttonLink, classes.linkColor)}
      >
        <ListItem button>
          <ListItemIcon>
            <MoneyOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Withdrawal Requests" />
        </ListItem>
      </Link>

      <Link
        to="/users-feedback"
        className={clsx(classes.buttonLink, classes.linkColor)}
      >
        <ListItem button>
          <ListItemIcon>
            <FeedbackOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Feedbacks" />
        </ListItem>
      </Link>

      <Divider variant="middle" className={classes.divider} />
    </>
  );
};

export default AdminLinks;
