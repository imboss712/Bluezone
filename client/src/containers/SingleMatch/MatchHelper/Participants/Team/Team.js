import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Player from './Player/Player';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  team: {
    padding: theme.spacing(1.25, 1, 1.25, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.2, 0.9, 1.2, 3.5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.2, 0.7, 1.2, 3)
    }
  },
  player: {
    padding: theme.spacing(0.5, 1, 1.2, 2.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.5, 1, 1.2, 2.4)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.5, 1, 1.2, 2.2)
    }
  }
}));

const Team = (props) => {
  const classes = useStyles();

  const { team, index } = props;

  return (
    <Box className={classes.root}>
      <Paper variant="outlined">
        <Box className={classes.team}>
          <Typography variant="h6" color="primary">
            <b>Team {index + 1}</b>
          </Typography>
        </Box>

        <Box className={classes.player}>
          <List>
            {team.players.map((player) => {
              return <Player key={player.playerId} profile={player} />;
            })}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default Team;
