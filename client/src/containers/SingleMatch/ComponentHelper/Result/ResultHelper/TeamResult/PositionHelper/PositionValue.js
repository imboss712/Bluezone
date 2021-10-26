import React from 'react';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}));

const PositionValue = (props) => {
  const classes = useStyles();

  const { position } = props;

  return (
    <Typography
      variant="h6"
      className={classes.root}
      sx={{ color: 'secondary' }}
    >
      {position && <b># {position}</b>}
    </Typography>
  );
};

export default PositionValue;
