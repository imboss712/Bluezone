import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import Social from './Social';
import Address from './Address';
import Disclaimer from './Disclaimer';
import Location from './Location';
import Risk from './Risk';
import footerLinks from './footerLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#455a64',
    marginTop: theme.spacing(5)
  },
  gridGrp: {
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
          <Grid container spacing={3} className={classes.gridGrp}>
            <Grid item xs={6} sm={4} md={3}>
              <Social />
            </Grid>
            {footerLinks.map((f) => {
              return (
                <Grid item xs={6} sm={4} md={3} key={f._id}>
                  <Paper className={classes.paper} elevation={0}>
                    <List style={{ padding: '0px' }}>
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
      <Risk />
    </>
  );
};

export default Footer;
