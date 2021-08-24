import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}));

const KillValue = (props) => {
  const classes = useStyles();

  const { kills } = props;

  return (
    <Typography className={classes.root} color="secondary">
      <b>{kills} Kills</b>
    </Typography>
  );
};

export default KillValue;
