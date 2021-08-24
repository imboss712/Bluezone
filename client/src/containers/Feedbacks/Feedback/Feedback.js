import React from 'react';
import { format } from 'date-fns';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.9, 2.75)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2.8, 1.4)
    },
    textAlign: 'left'
  },
  box: {
    padding: theme.spacing(2)
  },
  section: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  date: {
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(1.625),
    marginTop: theme.spacing(0.2)
  }
}));

const Feedback = (props) => {
  const classes = useStyles();

  const {
    feedback: { satisfy, title, reason, suggestion, createdAt }
  } = props;

  let satisfyColor = grey[800];

  switch (satisfy) {
    case 'Yes':
      satisfyColor = green[900];
      break;

    case 'Partially':
      satisfyColor = orange[800];
      break;

    case 'No':
      satisfyColor = red[800];
      break;

    default:
      satisfyColor = grey[800];
      break;
  }

  return (
    <Paper variant="outlined" className={classes.root}>
      <Box className={classes.box}>
        <Box className={classes.section} style={{ display: 'flex' }}>
          <Typography>
            <b>Satisfied:</b>
          </Typography>
          <Typography style={{ color: satisfyColor, marginLeft: '8px' }}>
            <b>{satisfy}</b>
          </Typography>
        </Box>

        <Box className={classes.section} style={{ display: 'flex' }}>
          <Typography>
            <b>Title:</b>
          </Typography>
          <Typography color="primary" style={{ marginLeft: '8px' }}>
            {title}
          </Typography>
        </Box>

        <Box className={classes.section}>
          <Typography>
            <b>Reason:</b>
          </Typography>
          <Typography>{reason}</Typography>
        </Box>

        <Box className={classes.section}>
          <Typography>
            <b>Suggestion:</b>
          </Typography>
          <Typography>{suggestion}.</Typography>
        </Box>

        <Box className={classes.section} style={{ display: 'flex' }}>
          <Typography>
            <b>Created At:</b>
          </Typography>
          <Typography color="textSecondary" style={{ marginLeft: '8px' }}>
            {format(new Date(createdAt), 'dd MMM yyyy')}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Feedback;
