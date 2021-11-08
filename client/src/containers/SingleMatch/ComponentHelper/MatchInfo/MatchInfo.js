import React, { memo } from 'react';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1.5, 0),
    backgroundColor: '#4A3F44',
    padding: theme.spacing(2.5, 0),
    borderRadius: theme.spacing(0)
  },
  gridBox: {
    flexGrow: 1
  },
  headingText: {
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

  const { title, value, secondaryValue } = props;

  return (
    <Box className={classes.datagrid}>
      <Typography sx={{ color: '#FFFFFF' }}>
        <b>{title}</b>
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{ marginTop: 1, justifyContent: 'center' }}
      >
        <Typography sx={{ color: '#C0C0C0' }}>{value}</Typography>

        {secondaryValue ? (
          <Typography
            variant="body2"
            sx={{ color: '#C0C0C0', alignSelf: 'flex-end' }}
          >
            <del>{secondaryValue}</del>
          </Typography>
        ) : null}
      </Stack>
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
    discountPercent,
    prizePool
  } = props;

  const newMatchDate = format(new Date(matchDate), 'yyyy-MM-dd');
  const newMatchTime = `${newMatchDate} ${matchTime}`;

  const formattedMatchDate = format(new Date(newMatchDate), 'dd MMM yyyy');
  const formattedMatchTime = format(new Date(newMatchTime), 'hh:mm aa');

  const discountedEntryFees =
    entryFees - (entryFees * discountPercent) / 100 === 0
      ? 'Free'
      : `₹ ${entryFees - (entryFees * discountPercent) / 100}`;

  const originalEntryFees =
    discountPercent === 0 || entryFees === 0 ? null : `₹${entryFees}`;

  const tournamentData = [
    {
      id: 1,
      title: 'Date',
      value: formattedMatchDate
    },
    {
      id: 2,
      title: 'Time',
      value: formattedMatchTime
    },
    {
      id: 3,
      title: 'Team Type',
      value: teamType
    },
    {
      id: 4,
      title: 'Perspective',
      value: perspective
    },
    {
      id: 5,
      title: 'Map',
      value: map
    },
    {
      id: 6,
      title: 'Server',
      value: server
    },
    {
      id: 7,
      title: 'Entry Fees',
      value: discountedEntryFees,
      secondaryValue: originalEntryFees
    },
    {
      id: 8,
      title: 'Prize Pool',
      value: `₹ ${prizePool}`
    }
  ];

  return (
    <Paper className={classes.paper} elevation={0}>
      <Container>
        <Typography className={classes.headingText}>{title}</Typography>

        <Grid container spacing={4} alignItems="center">
          {tournamentData.map((data) => {
            return (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                key={data.id}
                className={classes.gridBox}
              >
                <DataGrid
                  title={data.title}
                  value={data.value}
                  secondaryValue={data.secondaryValue}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Paper>
  );
});

export default MatchInfo;
