import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import LiveHelpRoundedIcon from '@material-ui/icons/LiveHelpRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4.5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4)
    },
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: theme.palette.text.secondary
  },
  icon: {
    fontSize: theme.spacing(9.5),
    marginRight: theme.spacing(2)
  },
  typography: {
    fontWeight: 'bolder',
    textAlign: 'left',
    fontSize: theme.spacing(3)
  }
}));

const Info = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs>
            <Paper className={classes.paper} elevation={0}>
              <SportsEsportsRoundedIcon className={classes.icon} />

              <Typography className={classes.typography}>
                DAILY <br />
                MATCHES
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper} elevation={0}>
              <AccountBalanceWalletRoundedIcon className={classes.icon} />

              <Typography className={classes.typography}>
                EASY <br /> PAYMENTS
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper} elevation={0}>
              <LiveHelpRoundedIcon className={classes.icon} />

              <Typography className={classes.typography}>
                24 X 7 <br /> SUPPORT
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Divider variant="middle" />
      </Container>
    </Box>
  );
};

export default Info;
