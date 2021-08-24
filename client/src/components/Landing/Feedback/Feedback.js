import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import FeedbackLists from './FeedbackLists';
import SingleFeedback from './SingleFeedback';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4.75)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4.5)
    }
  },
  gridGrp: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  typography: {
    color: '#282828',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3.8)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(3.6)
    }
  }
}));

const Feedback = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          className={classes.typography}
          title="Bluezone User Feedback"
        >
          WHAT OUR USERS SAY
        </Typography>

        <Box className={classes.gridGrp}>
          <Grid container spacing={2}>
            {FeedbackLists.map((feedback) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={feedback._id}>
                  <SingleFeedback feedback={feedback} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Feedback;
