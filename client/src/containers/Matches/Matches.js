import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import Loading from '../../ui/Loading/Loading';
import randomColor from '../../datas/randomColor';

import Match from './ComponentHelper/Match/Match';
const MatchSort = lazy(() => import('./ComponentHelper/MatchSort/MatchSort'));
const Error = lazy(() => import('../../ui/Error/Error'));

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  }
}));

const Matches = (props) => {
  const classes = useStyles();

  const {
    fetchMatches,
    match: { matches, loadingMatches }
  } = props;

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  return (
    <>
      <HelmetComponent
        title="Online Battlegrounds Mobile India Tournaments | Bluezone"
        description="Play daily online BGMI tournaments of different modes like Solo, Duo and Squad in different maps at the date and time of your choice."
        url="https://www.bluezone.fun/tournaments"
        indexBehaviour="index, follow"
      />

      <Box sx={{ marginBottom: 2 }}>
        <Container>
          <BackButton link="/my-tournaments" text="Go To My Tournaments" />

          <Suspense>
            <MatchSort />
          </Suspense>

          <Grid container spacing={3} className={classes.grid}>
            {loadingMatches ? (
              <Loading>Loading Matches...</Loading>
            ) : matches.length > 0 ? (
              matches.map((match) => (
                <Grid item key={match._id}>
                  <Match
                    border={randomColor[Math.floor(Math.random() * 10)]}
                    match={match}
                  />
                </Grid>
              ))
            ) : (
              <Suspense>
                <Error status="204" statusText="No tournaments hosted yet." />
              </Suspense>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  match: state.match
});

const mapDispatchToProps = (dispatch) => ({
  fetchMatches: () => dispatch(actions.getAllMatches())
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
