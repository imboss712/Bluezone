import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import makeStyles from '@mui/styles/makeStyles';

import footerLinks from '../../datas/footerLinks';

import Social from './ComponentHelper/Social';
import Address from './ComponentHelper/Address';
import Disclaimer from './ComponentHelper/Disclaimer';
import Location from './ComponentHelper/Location';
import Warning from './ComponentHelper/Warning';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#455a64',
    marginTop: theme.spacing(5)
  },
  gridBox: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(0),
    backgroundColor: 'transparent'
  },
  linkTitle: {
    color: 'white'
  },
  link: {
    color: '#FFFFFF',
    opacity: 0.725,
    textDecoration: 'none'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={3} className={classes.gridBox}>
            <Grid item xs={6} sm={4} md={3}>
              <Social />
            </Grid>

            {footerLinks.map((f) => {
              return (
                <Grid item xs={6} sm={4} md={3} key={f._id}>
                  <Paper className={classes.paper} elevation={0}>
                    <List sx={{ padding: 0 }}>
                      <ListItem className={classes.linkTitle}>
                        {f.title}
                      </ListItem>

                      {f.links.map((link) => {
                        return (
                          <ListItem key={link._id}>
                            <Link
                              to={link.url}
                              className={classes.link}
                              underline="none"
                            >
                              {link.label}
                            </Link>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
          <Divider />
          <Address />
          <Divider />
          <Disclaimer />
        </Container>
      </Box>
      <Location />
      <Warning />
    </>
  );
};

export default Footer;
