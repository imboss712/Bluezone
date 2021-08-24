import api from '../../utils/api';

import { setAlert } from './alert';

import {
  GET_MATCH,
  GET_MATCHES,
  GET_OWN_MATCHES,
  CREATE_MATCH,
  UPDATE_MATCH,
  DELETE_MATCH,
  SEND_ROOM_ID_PWD,
  CHANGE_MATCH_STATUS,
  MATCH_ERROR,
  MATCHES_ERROR,
  MY_MATCHES_ERROR,
  SORT_BY_DATE,
  SORT_BY_ENTRY,
  INCREASE_PARTICIPANT_COUNT,
  DECREASE_PARTICIPANT_COUNT
} from './actionTypes';

// Get match by id
export const getMatchById = (matchId) => async (dispatch) => {
  try {
    const res = await api.get(`/matches/${matchId}`);

    dispatch({
      type: GET_MATCH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MATCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get matches
export const getAllMatches = () => async (dispatch) => {
  try {
    const res = await api.get('/matches');

    dispatch({
      type: GET_MATCHES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MATCHES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get own matches
export const getMyMatches = (matchStatus) => async (dispatch) => {
  try {
    const res = await api.get(`/my-matches?matchStatus=${matchStatus}`);

    dispatch({
      type: GET_OWN_MATCHES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MY_MATCHES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Sort matches by date
export const sortByDate = (dateType) => (dispatch) => {
  dispatch({
    type: SORT_BY_DATE,
    payload: dateType
  });
};

// Sort matches by entry
export const sortByEntry = (entryType) => (dispatch) => {
  dispatch({
    type: SORT_BY_ENTRY,
    payload: entryType
  });
};

// Create a Match
export const createMatch = (matchData, history) => async (dispatch) => {
  try {
    const res = await api.post('/matches', matchData);

    dispatch({
      type: CREATE_MATCH,
      payload: res.data
    });
    dispatch(setAlert('Match created successfully', 'success'));
    history.push('/tournaments');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
  }
};

// Update a Match
export const updateMatch = (matchId, matchData, history) => async (
  dispatch
) => {
  try {
    const res = await api.patch(`/matches/${matchId}`, matchData);

    dispatch({
      type: UPDATE_MATCH,
      payload: res.data
    });

    dispatch(setAlert('Match updated successfully', 'success'));
    history.push(`/tournaments/${matchId}`);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to update match', 'error'));
    }
  }
};

// Send tournament room id and pwd
export const sendRoomIdPwd = (matchId, roomData) => async (dispatch) => {
  try {
    const res = await api.post(`/matches/${matchId}/send-details`, roomData);

    dispatch({
      type: SEND_ROOM_ID_PWD,
      payload: res.data
    });

    dispatch(
      setAlert('Tournament Room Id and Password sent successfully', 'success')
    );
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to send Room Id Password', 'error'));
    }
  }
};

// Change match status
export const changeMatchStatus = (matchId, statusData) => async (dispatch) => {
  try {
    const res = await api.post(`/matches/${matchId}/set-status`, statusData);

    dispatch({
      type: CHANGE_MATCH_STATUS,
      payload: res.data
    });

    dispatch(setAlert('Match status updated successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to change status', 'error'));
    }
  }
};

// Increase Participate count in real time
export const increaseParticipants = (matchId, count) => (dispatch) => {
  dispatch({
    type: INCREASE_PARTICIPANT_COUNT,
    payload: { matchId, count }
  });
};

// Decrease Participate count in real time
export const decreaseParticipants = (matchId, count) => (dispatch) => {
  dispatch({
    type: DECREASE_PARTICIPANT_COUNT,
    payload: { matchId, count }
  });
};

// Delete match by id
export const deleteMatch = (matchId, history) => async (dispatch) => {
  try {
    await api.delete(`/matches/${matchId}`);

    dispatch({
      type: DELETE_MATCH,
      payload: matchId
    });

    dispatch(setAlert('Match deleted successfully', 'success'));
    history.push('/tournaments');
  } catch (err) {
    dispatch(setAlert('Failed to delete match', 'error'));
  }
};
