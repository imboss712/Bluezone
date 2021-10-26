import {
  CREATE_TEAM,
  JOIN_TEAM,
  REMOVE_TEAM,
  LEAVE_TEAM,
  KICK_TEAMMATE,
  GET_ALL_TEAM,
  GET_TEAM,
  TEAM_ERROR,
  TEAMS_ERROR
} from '../actions/actionTypes';

const initialState = {
  teams: [],
  team: null,
  teamsError: {},
  teamError: {},
  loadingTeams: true,
  loadingTeam: true
};

const teamReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_TEAM:
      return { ...state, teams: payload, loadingTeams: false, teamsError: {} };
    case CREATE_TEAM:
      return {
        ...state,
        teams: [...state.teams, payload[0]],
        team: payload,
        loadingTeam: false
      };
    case JOIN_TEAM:
    case KICK_TEAMMATE:
      return {
        ...state,
        teams: state.teams.map((team) =>
          team._id.teamId === payload[0]._id.teamId ? payload[0] : team
        ),
        team: payload,
        loadingTeam: false
      };
    case LEAVE_TEAM:
      return {
        ...state,
        teams:
          payload.data.length === 0
            ? state.teams.filter((team) => team._id.teamId !== payload.teamId)
            : state.teams.map((team) =>
                team._id.teamId === payload.data[0]._id.teamId
                  ? payload.data[0]
                  : team
              ),
        team: [],
        loadingTeam: false
      };
    case REMOVE_TEAM:
      return {
        ...state,
        teams: state.teams.filter((team) => team._id.teamId !== payload._id),
        team: [],
        loadingTeam: false
      };
    case GET_TEAM:
      return { ...state, team: payload, loadingTeam: false, teamError: {} };
    case TEAM_ERROR:
      return { ...state, teamError: payload, loadingTeam: false };
    case TEAMS_ERROR:
      return { ...state, teamsError: payload, loadingTeams: false };
    default:
      return state;
  }
};

export default teamReducer;
