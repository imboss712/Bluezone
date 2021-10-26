import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import homeFeedbacksList from '../../../datas/homeFeedbacksList';
import SingleFeedback from './ComponentHelper/SingleFeedback';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4.75)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4.5)
    }
  },
  gridBox: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  heading: {
    color: '#282828',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(3.8)
    },
    [theme.breakpoints.down('sm')]: {
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
          className={classes.heading}
          title="Bluezone User Feedback"
        >
          WHAT OUR USERS SAY
        </Typography>

        <Box className={classes.gridBox}>
          <Grid container spacing={2}>
            {homeFeedbacksList.map((feedback) => {
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
