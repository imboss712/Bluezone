import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import headerStyle from '../../ui/styles/headerStyles';

import GuestLinks from './Links/GuestLinks';
import AuthLinks from './Links/AuthLinks';

import MobileHeader from './MobileHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const sharedClasses = headerStyle();

  const isSmallScreen = useMediaQuery('(max-width:840px)');

  const {
    auth: { isAuthenticated }
  } = props;

  return (
    <Box className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" color="primary" className={classes.title}>
              <Link
                to="/"
                className={clsx(
                  sharedClasses.buttonLink,
                  sharedClasses.linkColor
                )}
              >
                <b>bluezone</b>
              </Link>
            </Typography>

            {isSmallScreen ? (
              <MobileHeader />
            ) : isAuthenticated ? (
              <AuthLinks />
            ) : (
              <GuestLinks />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
