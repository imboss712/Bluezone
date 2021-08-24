import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PositionValue from './PositionHelper/PositionValue';
import PlayerResult from '../PlayerResult/PlayerResult';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  teamResult: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1.75, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5, 3.25)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.4, 3)
    }
  },
  playerResult: {
    padding: theme.spacing(0.75, 1.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.5, 1.25)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.4, 1.2)
    }
  }
}));

const TeamResult = (props) => {
  const classes = useStyles();

  const { team, index } = props;

  return (
    <Box className={classes.root}>
      <Paper variant="outlined">
        <Box className={classes.teamResult}>
          <Typography variant="h6" color="primary">
            <b>Team {index + 1}</b>
          </Typography>

          <PositionValue position={team._id.position} />
        </Box>

        <Box className={classes.playerResult}>
          {team.players.map((player) => {
            return <PlayerResult key={player.playerId} profile={player} />;
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default TeamResult;
