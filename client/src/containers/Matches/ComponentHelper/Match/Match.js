import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

import MatchStatus from './MatchHelper/MatchStatus';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(3.5, 4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3.5, 3.25)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3.5, 4)
    },
    borderRadius: theme.spacing(0.75),
    borderTop: '8px solid'
  },
  box: {
    margin: theme.spacing(3, 4, 0, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3, 3, 0, 3)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 1.5, 0, 1.5)
    },
    textAlign: 'center'
  },
  buttonLink: {
    textDecoration: 'none'
  },
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 1.75)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1.5)
    }
  },
  titleText: {
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(2.25),
    whiteSpace: 'nowrap'
  },
  valueText: {
    color: '#000000',
    fontSize: theme.spacing(2.15),
    whiteSpace: 'nowrap'
  },
  secondaryValueText: {
    color: '#000000',
    whiteSpace: 'nowrap',
    alignSelf: 'flex-end'
  }
}));

const DataGrid = (props) => {
  const classes = useStyles();

  const { title, value, secondaryValue, strike } = props;

  return (
    <section className={classes.section}>
      <Stack spacing={1.75}>
        <Typography className={classes.titleText}>
          <b>{title}</b>
        </Typography>

        <Stack direction="row" spacing={1}>
          <Typography className={classes.valueText}>{value}</Typography>

          {secondaryValue ? (
            <Typography variant="body2" className={classes.secondaryValueText}>
              {strike ? <del>{secondaryValue}</del> : secondaryValue}
            </Typography>
          ) : null}
        </Stack>
      </Stack>
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
        sx={{ borderTopColor: border }}
        variant="outlined"
      >
        <MatchStatus
          matchStatus={match.matchStatus}
          participantStatus={match.participantStatus}
        />

        <Typography variant="h6" sx={{ margin: 2 }}>
          <b>{match.title}</b>
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={6}>
            <DataGrid title="Date" value={formattedMatchDate} />
            <DataGrid
              title="Type"
              value={match.teamType}
              secondaryValue={match.perspective}
            />
            <DataGrid
              title="Entry"
              value={
                match.entryFees -
                  (match.entryFees * match.discountPercent) / 100 ===
                0
                  ? 'Free'
                  : `₹${
                      match.entryFees -
                      (match.entryFees * match.discountPercent) / 100
                    }`
              }
              secondaryValue={
                match.discountPercent === 0 || match.entryFees === 0
                  ? null
                  : `₹${match.entryFees}`
              }
              strike={
                match.discountPercent === 0 || match.entryFees === 0
                  ? false
                  : true
              }
            />
          </Grid>

          <Grid item xs={6}>
            <DataGrid title="Time" value={formattedMatchTime} />
            <DataGrid title="Map" value={match.map} />
            <DataGrid
              title="Prize"
              value={match.prizePool === 0 ? 'No Prize' : `₹${match.prizePool}`}
            />
          </Grid>
        </Grid>

        <Box className={classes.box}>
          <Link to={matchURL} className={classes.buttonLink}>
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
