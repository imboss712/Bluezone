import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../store/actions/index';

import Loading from '../../components/Loading/Loading';
import BackButton from '../../components/BackButton/BackButton';
import Feedback from './Feedback/Feedback';

const Error = lazy(() => import('../../components/Error/Error'));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 960,
    margin: 'auto'
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.8, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.6, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  },
  typography: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  box: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.8, 2.75)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2.6, 1.4)
    }
  },
  feedbackIcon: {
    fontSize: theme.spacing(6),
    color: '#3F51B5'
  }
}));

const Feedbacks = (props) => {
  const classes = useStyles();

  const {
    feedback: { feedbacksLoading, feedbacks },
    OnGetFeedbacks
  } = props;

  useEffect(() => {
    OnGetFeedbacks();
  }, [OnGetFeedbacks]);

  return (
    <>
      <Helmet>
        <title>Users Feedback &amp; Suggestions | Bluezone</title>
        <link rel="canonical" href="https://www.bluezone.fun/users-feedback" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Users Feedback &amp; Suggestions | Bluezone"
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/users-feedback"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Users Feedback &amp; Suggestions | Bluezone"
        />
      </Helmet>

      <Box className={classes.root}>
        <Container>
          <BackButton link="/tournaments" text="Go To Tournaments" />

          <Paper className={classes.paper} variant="outlined">
            <FeedbackRoundedIcon className={classes.feedbackIcon} />
            <Typography className={classes.typography} variant="h5">
              <b>Users Feedback</b>
            </Typography>

            <Box className={classes.box}>
              <Typography variant="body2" color="textSecondary">
                Last 20 users feedback will be shown here.
              </Typography>
            </Box>

            {feedbacksLoading ? (
              <Loading hideImage>Fetching User Feedbacks...</Loading>
            ) : feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <Feedback key={feedback._id} feedback={feedback} />
              ))
            ) : (
              <Suspense>
                <Error hideImage status="204" statusText="No feedbacks yet." />
              </Suspense>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  feedback: state.feedback
});

const mapDispatchToProps = (dispatch) => ({
  OnGetFeedbacks: () => dispatch(actions.getFeedbacks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);
