import React from 'react';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';

import Player from '../../../Participants/Team/Player/Player';
import KillValue from './KillHelper/KillValue';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px 0 8px'
  }
}));

const PlayerResult = (props) => {
  const classes = useStyles();

  const { profile } = props;

  return (
    <Box className={classes.root}>
      <Player profile={profile} />

      <KillValue kills={profile.kill} />
    </Box>
  );
};

export default PlayerResult;
