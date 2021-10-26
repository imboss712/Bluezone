import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import makeStyles from '@mui/styles/makeStyles';

import Feedback from './Feedback/Feedback';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import Loading from '../../ui/Loading/Loading';
import globalStyles from '../../ui/styles/globalStyles';
const Error = lazy(() => import('../../ui/Error/Error'));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 960,
    margin: 'auto'
  }
}));

const Feedbacks = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

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

          <Paper className={sharedClasses.paper} variant="outlined">
            <FeedbackRoundedIcon className={sharedClasses.headingIcon} />
            <Typography className={sharedClasses.headingText} variant="h5">
              <b>Users Feedback</b>
            </Typography>

            <Box className={sharedClasses.box}>
              <Typography variant="body2" color="textSecondary">
                Last 10 users feedback will be shown here.
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
