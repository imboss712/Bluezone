import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import MatchStatus from './MatchHelper/MatchStatus';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(3.5, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3.5, 3.25)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3.5, 4)
    },
    borderRadius: theme.spacing(0.75),
    borderTop: '8px solid'
  },
  box: {
    margin: theme.spacing(3, 4, 1, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 3, 1, 3)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 1.5, 1, 1.5)
    },
    textAlign: 'center'
  },
  btnLink: {
    textDecoration: 'none'
  },
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1.75)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1.5)
    }
  },
  heading: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(2.25),
    whiteSpace: 'nowrap'
  },
  text: {
    color: 'black',
    fontSize: theme.spacing(2.15),
    whiteSpace: 'nowrap'
  }
}));

const DataGrid = (props) => {
  const classes = useStyles();

  const { title, value } = props;

  return (
    <section className={classes.section}>
      <Typography className={classes.heading}>
        <b>{title}</b>
      </Typography>
      <Typography className={classes.text}>{value}</Typography>
    </section>
  );
};

const Match = (props) => {
  const classes = useStyles();

  const { match, border } = props;

  const matchURL = `/tournaments/${match._id}`;

  const newMatchDate = format(new Date(match.matchDate), 'yyyy-MM-dd');
  const newMatchTime = `${newMatchDate} ${match.matchTime}`;

  const formattedMatchDate = format(new Date(newMatchDate), 'E, dd MMM');
  const formattedMatchTime = format(new Date(newMatchTime), 'hh:mm aa');

  return (
    <Box className={classes.root}>
      <Paper
        className={classes.paper}
        style={{ borderTopColor: border }}
        variant="outlined"
      >
        <MatchStatus
          matchStatus={match.matchStatus}
          participantStatus={match.participantStatus}
        />

        <Typography variant="h6" className={classes.title}>
          <b>{match.title}</b>
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={6}>
            <DataGrid title="Date" value={formattedMatchDate} />
            <DataGrid title="Type" value={match.teamType} />
            <DataGrid title="Map" value={match.map} />
            <DataGrid title="Entry" value={`Rs. ${match.entryFees}`} />

            <DataGrid
              title="Participants"
              value={`${match.participants} / 100`}
            />
          </Grid>

          <Grid item xs={6}>
            <DataGrid title="Time" value={formattedMatchTime} />
            <DataGrid title="Perspective" value={match.perspective} />
            <DataGrid title="Server" value={match.server} />
            <DataGrid title="Prize" value={`Rs. ${match.prizePool}`} />
            <DataGrid title="Venue" value="Online" />
          </Grid>
        </Grid>

        <Box className={classes.box}>
          <Link to={matchURL} className={classes.btnLink}>
            <Button
              color="primary"
              size="large"
              variant="contained"
              disableElevation
              fullWidth
            >
              Participate Now
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Match;
