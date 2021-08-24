import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

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
      <Box>
        <Player profile={profile} />
      </Box>

      <KillValue kills={profile.kill} />
    </Box>
  );
};

export default PlayerResult;
