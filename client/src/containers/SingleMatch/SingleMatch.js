import React, { lazy, Suspense, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import * as actions from '../../store/actions/index';

import MatchInfo from './MatchHelper/MatchInfo/MatchInfo';

import BackButton from '../../components/BackButton/BackButton';
import Loading from '../../components/Loading/Loading';
import SuspenseLoading from '../../components/Loading/SuspenseLoading';
import Modal from '../../components/Modal/Modal';

import DeleteModal from './MatchHelper/MatchActions/MatchActionsHelper/DeleteModal';

const Error = lazy(() => import('../../components/Error/Error'));
const MatchActions = lazy(() =>
  import('./MatchHelper/MatchActions/MatchActions')
);
const TabGroup = lazy(() => import('./TabGroup'));
const ShortInfo = lazy(() => import('./MatchHelper/ShortInfo/ShortInfo'));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const SingleMatch = (props) => {
  const classes = useStyles();

  const modalRef = useRef();

  const {
    tournaments: { match: tournament, loadingMatch, matchError },
    user,
    onGetMatch,
    onDeleteMatch,
    history,
    match
  } = props;

  const tournamentId = match.params.tournamentId;

  const isMobileScreen = useMediaQuery('(max-width:960px)');

  const handleDelete = useCallback(() => {
    modalRef.current.openModal();
  }, []);

  useEffect(() => {
    onGetMatch(tournamentId);
  }, [onGetMatch, tournamentId]);

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

    const formattedMatchDate = format(new Date(newMatchDate), 'dd MMM yyyy');
    const formattedMatchTime = format(new Date(newMatchTime), 'hh:mm aa');

    return (
      <>
        <Helmet>
          <title>
            Online {tournament.teamType} BGMI Tournament at {formattedMatchDate}{' '}
            | Bluezone
          </title>
          <meta
            name="description"
            content={`The online ${tournament.teamType} BGMI tournament of Rs ${tournament.prizePool} prize pool will be played on ${formattedMatchDate} at ${formattedMatchTime} on the map of ${tournament.map}.`}
          />
          <link
            rel="canonical"
            href={`https://www.bluezone.fun/tournaments/${tournament._id}`}
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={`Online ${tournament.teamType} BGMI Tournament at ${formattedMatchDate} | Bluezone`}
          />
          <meta
            property="og:description"
            content={`The online ${tournament.teamType} BGMI tournament of Rs ${tournament.prizePool} prize pool will be played on ${formattedMatchDate} at ${formattedMatchTime} on the map of ${tournament.map}.`}
          />
          <meta
            property="og:url"
            content={`https://www.bluezone.fun/tournaments/${tournament._id}`}
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content={`The online ${tournament.teamType} BGMI tournament of Rs ${tournament.prizePool} prize pool will be played on ${formattedMatchDate} at ${formattedMatchTime} on the map of ${tournament.map}.`}
          />
          <meta
            name="twitter:title"
            content={`Online ${tournament.teamType} BGMI Tournament at ${formattedMatchDate} | Bluezone`}
          />
        </Helmet>

        <Box>
          <Container>
            <BackButton link="/tournaments" text="Back To Tournaments" />

            <Suspense>
              <MatchActions
                tournamentId={tournamentId}
                role={user.role}
                matchStatus={tournament.matchStatus}
                participantStatus={tournament.participantStatus}
                onDelete={handleDelete}
              />
            </Suspense>
          </Container>

          <MatchInfo
            matchTime={tournament.matchTime}
            matchDate={tournament.matchDate}
            teamType={tournament.teamType}
            perspective={tournament.perspective}
            map={tournament.map}
            server={tournament.server}
            entryFees={tournament.entryFees}
            prizePool={tournament.prizePool}
          />
        </Box>

        <Box className={classes.root}>
          <Container>
            <Grid
              container
              spacing={3}
              direction={isMobileScreen ? 'column-reverse' : 'row'}
            >
              <Grid item xs={12} sm={12} md={8}>
                <Suspense fallback={<SuspenseLoading />}>
                  <TabGroup
                    id={tournament._id}
                    teamType={tournament.teamType}
                    entryFees={tournament.entryFees}
                    matchStatus={tournament.matchStatus}
                  />
                </Suspense>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Suspense fallback={<SuspenseLoading />}>
                  <ShortInfo
                    tournamentId={tournament._id}
                    participantStatus={tournament.participantStatus}
                    entryFees={tournament.entryFees}
                    matchStatus={tournament.matchStatus}
                    participationStatus={tournament.participationStatus}
                    participants={tournament.participants}
                  />
                </Suspense>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Modal
          ref={modalRef}
          title="Delete Tournament"
          confirmText="Delete"
          onConfirmClick={() => {
            onDeleteMatch(tournamentId, history);
          }}
        >
          <DeleteModal />
        </Modal>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  tournaments: state.match
});

const mapDispatchToProps = (dispatch) => ({
  onGetMatch: (matchId) => dispatch(actions.getMatchById(matchId)),
  onDeleteMatch: (matchId, history) =>
    dispatch(actions.deleteMatch(matchId, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMatch);
