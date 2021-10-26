import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3.5)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    },
    padding: theme.spacing(1, 0)
  },
  arrowIcon: {
    fontSize: theme.spacing(2.2),
    marginRight: theme.spacing(1)
  }
}));

const BackButton = ({ link, text }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.buttonBox} elevation={0}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Button color="primary">
          <ArrowBackRoundedIcon className={classes.arrowIcon} color="primary" />
          {text}
        </Button>
      </Link>
    </Paper>
  );
};

export default BackButton;
