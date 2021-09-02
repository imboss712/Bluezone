import React, { memo } from 'react';
import { format } from 'date-fns';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1.5, 0),
    backgroundColor: '#4A3F44',
    padding: theme.spacing(2.5, 0),
    borderRadius: theme.spacing(0)
  },
  box: {
    flexGrow: 1
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    margin: theme.spacing(0.65, 0, 2.6, 0),
    letterSpacing: theme.spacing(0.05),
    fontSize: theme.spacing(3)
  },
  datagrid: {
    padding: theme.spacing(1.5, 0),
    textAlign: 'center'
  }
}));

const DataGrid = (props) => {
  const classes = useStyles();

  const { title, value } = props;

  return (
    <Box className={classes.datagrid}>
      <Typography style={{ color: '#FFFFFF' }}>
        <b>{title}</b>
      </Typography>
      <Typography style={{ marginTop: '8px', color: '#C0C0C0' }}>
        {value}
      </Typography>
    </Box>
  );
};

const MatchInfo = memo((props) => {
  const classes = useStyles();

  const {
    title,
    matchTime,
    matchDate,
    teamType,
    perspective,
    map,
    server,
    entryFees,
    prizePool
  } = props;

  const newMatchDate = format(new Date(matchDate), 'yyyy-MM-dd');
  const newMatchTime = `${newMatchDate} ${matchTime}`;

  const formattedMatchDate = format(new Date(newMatchDate), 'dd MMM yyyy');
  const formattedMatchTime = format(new Date(newMatchTime), 'hh:mm aa');

  return (
    <Paper className={classes.paper} elevation={0}>
      <Container>
        <Typography className={classes.title}>{title}</Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={6} sm={4} md={3} className={classes.box}>
            <DataGrid title="Date" value={formattedMatchDate} />
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3} className={classes.box}>
            <DataGrid title="Time" value={formattedMatchTime} />
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3} className={classes.box}>
            <DataGrid title="Team Type" value={teamType} />
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3} className={classes.box}>
            <DataGrid title="Perspective" value={perspective} />
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3} className={classes.box}>
            <DataGrid title="Map" value={map} />
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3} className={classes.box}>
            <DataGrid title="Server" value={server} />
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3} className={classes.box}>
            <DataGrid title="Entry Fees" value={`Rs. ${entryFees}`} />
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3} className={classes.box}>
            <DataGrid title="Prize Pool" value={`Rs. ${prizePool}`} />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
});

export default MatchInfo;
