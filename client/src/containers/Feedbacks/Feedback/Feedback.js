import React from 'react';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import red from '@mui/material/colors/red';
import orange from '@mui/material/colors/orange';
import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2.9, 2.75)
    },
    [theme.breakpoints.down('sm')]: {
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
        <Box className={classes.section} sx={{ display: 'flex' }}>
          <Typography>
            <b>Satisfied:</b>
          </Typography>

          <Typography sx={{ color: satisfyColor, marginLeft: 1 }}>
            <b>{satisfy}</b>
          </Typography>
        </Box>

        <Box className={classes.section} sx={{ display: 'flex' }}>
          <Typography>
            <b>Title:</b>
          </Typography>

          <Typography color="primary" sx={{ marginLeft: 1 }}>
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

        <Box className={classes.section} sx={{ display: 'flex' }}>
          <Typography>
            <b>Created At:</b>
          </Typography>

          <Typography color="textSecondary" sx={{ marginLeft: 1 }}>
            {format(new Date(createdAt), 'dd MMM yyyy')}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Feedback;
