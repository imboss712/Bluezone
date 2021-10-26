import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4.5)
    },
    [theme.breakpoints.down('sm')]: {
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
  text: {
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

              <Typography className={classes.text}>
                DAILY <br />
                MATCHES
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper} elevation={0}>
              <AccountBalanceWalletRoundedIcon className={classes.icon} />

              <Typography className={classes.text}>
                EASY <br /> PAYMENTS
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper} elevation={0}>
              <LiveHelpRoundedIcon className={classes.icon} />

              <Typography className={classes.text}>
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
