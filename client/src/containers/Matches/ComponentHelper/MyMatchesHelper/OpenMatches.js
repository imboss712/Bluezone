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

const OpenMatches = (props) => {
  const classes = useStyles();

  const {
    fetchMyOpenMatches,
    user,
    match: { loadingMyMatches, myMatches }
  } = props;

  useEffect(() => {
    fetchMyOpenMatches('Open');
  }, [fetchMyOpenMatches]);

  return (
    <Grid container spacing={3} className={classes.grid}>
      {loadingMyMatches ? (
        <Loading>Loading Open &amp; Live Matches...</Loading>
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
            statusText={
              user && user.role === 'admin'
                ? 'You have not hosted any tournament.'
                : 'You have not participated in any tournament.'
            }
          />
        </Suspense>
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  match: state.match,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyOpenMatches: (matchStatus) =>
    dispatch(actions.getMyMatches(matchStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenMatches);
