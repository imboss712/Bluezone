import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}));

const PositionValue = (props) => {
  const classes = useStyles();

  const { position } = props;

  return (
    <Typography variant="h6" className={classes.root} color="primary">
      {position && <b># {position}</b>}
    </Typography>
  );
};

export default PositionValue;
