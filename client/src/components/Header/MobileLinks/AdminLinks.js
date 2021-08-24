import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';

const useStyles = makeStyles((theme) => ({
  btnLink: {
    textDecoration: 'none'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const AdminLinks = () => {
  const classes = useStyles();

  return (
    <>
      <Link to="/host-tournament" className={classes.btnLink}>
        <ListItem button>
          <ListItemIcon>
            <AddCircleOutlineOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Host A Tournament" />
        </ListItem>
      </Link>

      <Link to="/payout-requests" className={classes.btnLink}>
        <ListItem button>
          <ListItemIcon>
            <MoneyOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Payout Requests" />
        </ListItem>
      </Link>

      <Link to="/users-feedback" className={classes.btnLink}>
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
