import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

// import AllLinks from './AllLinks';

const useStyles = makeStyles(() => ({
  btnLink: {
    textDecoration: 'none'
  }
}));

const GuestLinks = (props) => {
  const classes = useStyles();

  return (
    <div>
      {/* <AllLinks /> */}

      <Link to="/login" className={classes.btnLink}>
        <ListItem button>
          <ListItemIcon>
            <ArrowForwardOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </Link>

      <Link to="/register" className={classes.btnLink}>
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
