import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PositionForm from './PositionHelper/PositionForm';
import PlayerForm from '../PlayerResult/PlayerForm';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  },
  teamResult: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px 24px 8px 32px'
  },
  playerResult: {
    padding: theme.spacing(1.5),
    paddingTop: theme.spacing(0)
  }
}));

const TeamForm = (props) => {
  const classes = useStyles();

  const { team, index } = props;

  return (
    <Box className={classes.root}>
      <Paper variant="outlined">
        <Box className={classes.teamResult}>
          <Typography variant="h6" color="primary">
            <b>Team {index + 1}</b>
          </Typography>

          <PositionForm name={team._id.teamId} />
        </Box>

        <Box className={classes.playerResult}>
          {team.players.map((player) => {
            return <PlayerForm key={player.playerId} profile={player} />;
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default TeamForm;
