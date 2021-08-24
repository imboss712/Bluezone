import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../store/actions/index';

import randomColor from './randomColor';
// import MatchFilter from './MatchFilter/MatchFilter';
// import MatchPagination from './MatchPagination/MatchPagination';

import BackButton from '../../components/BackButton/BackButton';
import Loading from '../../components/Loading/Loading';
import Match from './Match/Match';

const Error = lazy(() => import('../../components/Error/Error'));
const MatchSort = lazy(() => import('./MatchSort/MatchSort'));

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
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
      <Helmet>
        <title>Online Battlegrounds Mobile India Tournaments | Bluezone</title>
        <meta
          name="description"
          content="Play daily online BGMI tournaments of different modes like Solo, Duo and Squad in different maps at the date and time of your choice."
        />
        <link rel="canonical" href="https://www.bluezone.fun/tournaments" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Battlegrounds Mobile India Tournaments | Bluezone"
        />
        <meta
          property="og:description"
          content="Play daily online BGMI tournaments of different modes like Solo, Duo and Squad in different maps at the date and time of your choice."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/tournaments"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Play daily online BGMI tournaments of different modes like Solo, Duo and Squad in different maps at the date and time of your choice."
        />
        <meta
          name="twitter:title"
          content="Online Battlegrounds Mobile India Tournaments | Bluezone"
        />
      </Helmet>

      <Box style={{ marginBottom: '16px' }}>
        <Container>
          <BackButton link="/my-tournaments" text="Go To My Tournaments" />

          <Suspense>
            <MatchSort />
          </Suspense>

          {/* <Grid container>
          <Grid item xs={9}> */}
          <Grid container spacing={3} className={classes.grid}>
            {loadingMatches ? (
              <Loading style={{ marginTop: '16px' }}>
                Loading Matches...
              </Loading>
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
                <Error
                  style={{ marginTop: '16px' }}
                  status="204"
                  statusText="No tournaments hosted yet."
                />
              </Suspense>
            )}
          </Grid>
          {/* </Grid>

          <Grid item xs={3}>
              <MatchFilter />
            </Grid>
          </Grid>
          <MatchPagination /> */}
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
