import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3.8),
      paddingTop: theme.spacing(2.4),
      paddingBottom: theme.spacing(2.4)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3.6),
      paddingTop: theme.spacing(2.3),
      paddingBottom: theme.spacing(2.3)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  },
  linkColor: {
    color: '#1976D2'
  }
}));

const FormNavigation = (props) => {
  const classes = useStyles();

  const { text, link, linkText } = props;

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography>
        {text}{' '}
        <Link to={link} className={classes.linkColor}>
          {linkText}
        </Link>
      </Typography>
    </Paper>
  );
};

export default FormNavigation;
