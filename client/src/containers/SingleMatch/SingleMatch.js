import React, { lazy, Suspense, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as actions from '../../store/actions/index';
import BackButton from '../../ui/BackButton/BackButton';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import Loading from '../../ui/Loading/Loading';
import SuspenseLoading from '../../ui/Loading/SuspenseLoading';
import Modal from '../../ui/Modal/Modal';

import DeleteModal from './ComponentHelper/MatchActions/MatchActionsHelper/DeleteModal';
import MatchInfo from './ComponentHelper/MatchInfo/MatchInfo';
const Error = lazy(() => import('../../ui/Error/Error'));
const MatchActions = lazy(() =>
  import('./ComponentHelper/MatchActions/MatchActions')
);
const TabGroup = lazy(() => import('./ComponentHelper/TabGroup'));
const ShortInfo = lazy(() => import('./ComponentHelper/ShortInfo/ShortInfo'));

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
        <HelmetComponent
          title={`Online ${tournament.teamType} BGMI Tournament at ${formattedMatchDate} | Bluezone`}
          description={`The online ${tournament.teamType} BGMI tournament of Rs ${tournament.prizePool} prize pool will be played on ${formattedMatchDate} at ${formattedMatchTime} on the map of ${tournament.map}.`}
          url={`https://www.bluezone.fun/tournaments/${tournament._id}`}
          indexBehaviour="index, follow"
        />

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
            title={tournament.title}
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
