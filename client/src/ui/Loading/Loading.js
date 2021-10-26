import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles';

import loading from '../../assets/loading.svg';

const useStyles = makeStyles((theme) => ({
  loadingBox: {
    textAlign: 'center',
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(5)
  },
  loadingIcon: {
    marginLeft: theme.spacing(0.75),
    verticalAlign: 'text-top'
  },
  image: {
    width: 300,
    height: 300,
    [theme.breakpoints.down('md')]: {
      width: 275,
      height: 275
    },
    [theme.breakpoints.down('sm')]: {
      width: 250,
      height: 250
    },
    [theme.breakpoints.down(undefined)]: {
      width: 200,
      height: 200
    }
  }
}));

const Loading = (props) => {
  const classes = useStyles();

  const { children, hideImage } = props;

  return (
    <Box className={classes.loadingBox}>
      <Paper className={classes.paper} elevation={0}>
        {hideImage || hideImage === true ? null : (
          <img src={loading} alt="Loading..." className={classes.image} />
        )}

        <Typography color="primary" variant="h6">
          {children}{' '}
          <CircularProgress
            size={24}
            color="primary"
            className={classes.loadingIcon}
          />
        </Typography>
      </Paper>
    </Box>
  );
};

export default Loading;
