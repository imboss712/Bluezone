import React from 'react';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}));

const KillValue = (props) => {
  const classes = useStyles();

  const { kills } = props;

  return (
    <Typography sx={{ color: 'secondary' }} className={classes.root}>
      <b>{kills} Kills</b>
    </Typography>
  );
};

export default KillValue;
