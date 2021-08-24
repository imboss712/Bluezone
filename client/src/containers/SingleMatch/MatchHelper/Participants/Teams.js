import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';

import Team from './Team/Team';

import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';

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
        <Error
          hideImage
          status="204"
          statusText="No participants yet. Create team to play tournament."
        />
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
