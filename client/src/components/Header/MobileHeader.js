import React, { useState } from 'react';
import { connect } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { makeStyles } from '@mui/styles';

import GuestLinks from './MobileLinks/GuestLinks';
import AuthLinks from './MobileLinks/AuthLinks';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
    [theme.breakpoints.down('425')]: {
      width: 275
    },
    [theme.breakpoints.down('375')]: {
      width: 260
    },
    [theme.breakpoints.down('320')]: {
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
