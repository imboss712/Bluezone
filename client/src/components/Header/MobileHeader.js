import React, { useState } from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/core/styles';

import GuestLinks from './MobileLinks/GuestLinks';
import AuthLinks from './MobileLinks/AuthLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  list: {
    width: 300,
    [theme.breakpoints.down(425)]: {
      width: 275
    },
    [theme.breakpoints.down(375)]: {
      width: 260
    },
    [theme.breakpoints.down(320)]: {
      width: 240
    }
  }
}));

const MobileHeader = (props) => {
  const classes = useStyles();

  const {
    auth: { isAuthenticated }
  } = props;

  const [openDrawer, setopenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };

  const handleDrawerClose = () => {
    setopenDrawer(false);
  };

  return (
    <div>
      <Button onClick={handleDrawerOpen}>
        <MenuRoundedIcon color="primary" />
      </Button>

      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
        <div
          className={classes.list}
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>{isAuthenticated ? <AuthLinks /> : <GuestLinks />}</List>
        </div>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MobileHeader);
