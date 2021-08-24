import api from '../../utils/api';

import { setAlert } from './alert';
import {
  increaseParticipants,
  decreaseParticipants,
  changeMatchStatus
} from './match';

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
} from './actionTypes';

// Create team
export const createTeam = (matchId) => async (dispatch) => {
  try {
    const res = await api.post(`/matches/${matchId}/create-team`);
    dispatch({
      type: CREATE_TEAM,
      payload: res.data
    });
    dispatch(setAlert('Team created successfully', 'success'));
    dispatch(increaseParticipants(matchId, 1));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
  }
};

// Join team
export const joinTeam = (matchId, joinTeamData) => async (dispatch) => {
  try {
    const res = await api.post(`/matches/${matchId}/join-team`, joinTeamData);

    dispatch({
      type: JOIN_TEAM,
      payload: res.data
    });
    dispatch(setAlert('Team joined successfully', 'success'));
    dispatch(increaseParticipants(matchId, 1));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
  }
};

// Remove team
export const removeTeam = (matchId) => async (dispatch) => {
  try {
    const res = await api.delete(`/matches/${matchId}/remove-team`);

    dispatch({
      type: REMOVE_TEAM,
      payload: res.data
    });

    dispatch(setAlert('Team deleted successfully', 'success'));
    dispatch(decreaseParticipants(matchId, parseInt(res.data.players.length)));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to delete team', 'error'));
    }
  }
};

// Leave team
export const leaveTeam = (matchId, teamId) => async (dispatch) => {
  try {
    const res = await api.post(`/matches/${matchId}/leave-team`);

    dispatch({
      type: LEAVE_TEAM,
      payload: { data: res.data, teamId }
    });
    dispatch(setAlert('Team leaved successfully', 'success'));
    dispatch(decreaseParticipants(matchId, 1));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to leave team', 'error'));
    }
  }
};

// Kick teammate
export const kickTeammate = (matchId, playerId) => async (dispatch) => {
  try {
    const res = await api.post(`/matches/${matchId}/kick-teammate/${playerId}`);

    dispatch({
      type: KICK_TEAMMATE,
      payload: res.data
    });
    dispatch(setAlert('Removed teammate successfully', 'success'));
    dispatch(decreaseParticipants(matchId, 1));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to remove teammate', 'error'));
    }
  }
};

// Get teams
export const getAllTeams = (matchId) => async (dispatch) => {
  try {
    const res = await api.get(`/matches/${matchId}/teams`);

    dispatch({
      type: GET_ALL_TEAM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TEAMS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Get own team
export const getMyTeam = (matchId) => async (dispatch) => {
  try {
    const res = await api.get(`/matches/${matchId}/my-team`);

    dispatch({
      type: GET_TEAM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TEAM_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Post result
export const postResult = (matchId, resultData) => async (dispatch) => {
  try {
    const res = await api.patch(`/matches/${matchId}/result`, resultData);

    dispatch(getAllTeams(matchId));

    dispatch(setAlert('Result posted successfully', 'success'));

    dispatch(changeMatchStatus(matchId, res.data));
  } catch (err) {
    dispatch({
      type: TEAMS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
