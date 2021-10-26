import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import Team from './Team/Team';

import * as actions from '../../../../store/actions/index';
import Loading from '../../../../ui/Loading/Loading';
const Error = lazy(() => import('../../../../ui/Error/Error'));

const Teams = (props) => {
  const {
    team: { loadingTeams, teams },
    onGetTeams,
    tournamentId
  } = props;

  useEffect(() => {
    onGetTeams(tournamentId);
  }, [onGetTeams, tournamentId]);

  return (
    <>
      {loadingTeams ? (
        <Loading hideImage>Fetching Teams...</Loading>
      ) : teams.length > 0 ? (
        teams.map((team, index) => (
          <Team key={team._id.teamId} team={team} index={index} />
        ))
      ) : (
        <Suspense>
          <Error
            hideImage
            status="204"
            statusText="No participants yet. Create team to play tournament."
          />
        </Suspense>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  team: state.team
});

const mapDispatchToProps = (dispatch) => ({
  onGetTeams: (matchId) => dispatch(actions.getAllTeams(matchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
