import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Player from '../../../Participants/Team/Player/Player';
import KillForm from './KillHelper/KillForm';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px 0 8px'
  }
}));

const PlayerForm = (props) => {
  const classes = useStyles();

  const { profile } = props;

  return (
    <Box className={classes.root}>
      <Box>
        <Player profile={profile} />
      </Box>

      <KillForm name={profile.playerId} />
    </Box>
  );
};

export default PlayerForm;
