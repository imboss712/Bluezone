import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../../../store/actions/index';
import Loading from '../../../../ui/Loading/Loading';
import SuspenseLoading from '../../../../ui/Loading/SuspenseLoading';
import randomColor from '../../../../datas/randomColor';
const Error = lazy(() => import('../../../../ui/Error/Error'));
const Match = lazy(() => import('../Match/Match'));

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  }
}));

const CompletedMatches = (props) => {
  const classes = useStyles();

  const {
    fetchMyCompletedMatches,
    match: { loadingMyMatches, myMatches }
  } = props;

  useEffect(() => {
    fetchMyCompletedMatches('Completed');
  }, [fetchMyCompletedMatches]);

  return (
    <Grid container spacing={3} className={classes.grid}>
      {loadingMyMatches ? (
        <Loading>Loading Completed Matches...</Loading>
      ) : myMatches.length > 0 ? (
        <Suspense fallback={<SuspenseLoading />}>
          {myMatches.map((match) => (
            <Grid item key={match._id}>
              <Match
                border={randomColor[Math.floor(Math.random() * 10)]}
                match={match}
              />
            </Grid>
          ))}
        </Suspense>
      ) : (
        <Suspense>
          <Error
            status="204"
            statusText="You have not completed any tournament yet."
          />
        </Suspense>
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  match: state.match
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyCompletedMatches: (matchStatus) =>
    dispatch(actions.getMyMatches(matchStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedMatches);
