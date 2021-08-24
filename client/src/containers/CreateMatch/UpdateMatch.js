import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { formatISO, format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';
import Match from './Match';

import Loading from '../../components/Loading/Loading';
const Error = lazy(() => import('../../components/Error/Error'));

const UpdateMatch = (props) => {
  const {
    history,
    onGetMatch,
    onUpdate,
    match,
    tournaments: { loadingMatch, match: tournament, matchError }
  } = props;

  const tournamentId = match.params.tournamentId;

  useEffect(() => {
    onGetMatch(tournamentId);
  }, [onGetMatch, tournamentId]);

  const handleSubmit = (values) => {
    onUpdate(
      tournamentId,
      {
        matchDate: formatISO(new Date(values.matchDate)),
        matchTime: format(new Date(values.matchTime), 'HH:mm')
      },
      history
    );
  };

  if (loadingMatch || tournament === null) {
    return <Loading>Fetching Match Data...</Loading>;
  }

  if (tournament === null && matchError && matchError.status) {
    return (
      <Suspense>
        <Error status={matchError.status} statusText={matchError.msg} />
      </Suspense>
    );
  }

  if (tournament) {
    const newMatchDate = format(new Date(tournament.matchDate), 'yyyy-MM-dd');
    const newMatchTime = `${newMatchDate} ${tournament.matchTime}`;

    const formattedMatchTime = format(
      new Date(newMatchTime),
      'yyyy-MM-dd hh:mm aa'
    );

    return (
      <>
        <Helmet>
          <title>Update Tournament | Bluezone</title>
          <link
            rel="canonical"
            href="https://www.bluezone.fun/edit-tournament"
          />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Update Tournament | Bluezone" />
          <meta
            property="og:url"
            content="https://www.bluezone.fun/edit-tournament"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Update Tournament | Bluezone" />
        </Helmet>

        <Match
          initialValues={{
            ...tournament,
            matchDate: newMatchDate,
            matchTime: formattedMatchTime
          }}
          handleSubmit={handleSubmit}
          edit
        />
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  tournaments: state.match
});

const mapDispatchToProps = (dispatch) => ({
  onGetMatch: (matchId) => dispatch(actions.getMatchById(matchId)),
  onUpdate: (matchId, matchData, history) =>
    dispatch(actions.updateMatch(matchId, matchData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMatch);
