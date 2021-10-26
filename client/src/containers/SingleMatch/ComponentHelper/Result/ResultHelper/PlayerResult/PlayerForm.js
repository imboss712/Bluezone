import React from 'react';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';

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
      <Player profile={profile} />

      <KillForm name={profile.playerId} />
    </Box>
  );
};

export default PlayerForm;
