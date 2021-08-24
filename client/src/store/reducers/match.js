import {
  GET_MATCH,
  GET_MATCHES,
  GET_OWN_MATCHES,
  CREATE_MATCH,
  UPDATE_MATCH,
  SEND_ROOM_ID_PWD,
  CHANGE_MATCH_STATUS,
  DELETE_MATCH,
  MATCH_ERROR,
  MATCHES_ERROR,
  MY_MATCHES_ERROR,
  SORT_BY_DATE,
  SORT_BY_ENTRY,
  INCREASE_PARTICIPANT_COUNT,
  DECREASE_PARTICIPANT_COUNT
} from '../actions/actionTypes';

import { sortMatchesByDate, sortMatchesByEntry } from '../../utils/sortFunc';

const initialState = {
  matches: [],
  myMatches: [],
  match: null,
  matchesError: {},
  myMatchesError: {},
  matchError: {},
  loadingMatch: true,
  loadingMatches: true,
  loadingMyMatches: true
};

const matchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MATCHES:
      let sortedMatches = sortMatchesByDate(payload, true);
      return {
        ...state,
        matches: sortedMatches,
        loadingMatches: false,
        matchesError: {}
      };
    case GET_OWN_MATCHES:
      return {
        ...state,
        myMatches: payload,
        loadingMyMatches: false,
        myMatchesError: {}
      };
    case SORT_BY_DATE:
      let dateSorted = sortMatchesByDate(state.matches, payload);
      return { ...state, matches: dateSorted, loadingMatches: false };
    case SORT_BY_ENTRY:
      let entrySorted = sortMatchesByEntry(state.matches, payload);
      return { ...state, matches: entrySorted, loadingMatches: false };
    case GET_MATCH:
      return { ...state, match: payload, loadingMatch: false, matchError: {} };
    case CREATE_MATCH:
      return {
        ...state,
        matches: [payload, ...state.matches],
        loadingMatch: false
      };
    case SEND_ROOM_ID_PWD:
    case CHANGE_MATCH_STATUS:
    case UPDATE_MATCH:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match._id === payload._id ? { ...match, ...payload } : match
        ),
        match: { ...state.match, ...payload },
        loadingMatch: false
      };
    case DELETE_MATCH:
      return {
        ...state,
        matches: state.matches.filter((match) => match._id !== payload),
        match: null,
        loadingMatch: false
      };
    case MATCH_ERROR:
      return {
        ...state,
        match: null,
        matchError: payload,
        loadingMatch: false
      };
    case MATCHES_ERROR:
      return { ...state, matchesError: payload, loadingMatches: false };
    case MY_MATCHES_ERROR:
      return { ...state, myMatchesError: payload, loadingMyMatches: false };
    case INCREASE_PARTICIPANT_COUNT:
      const updatedMatchInc = {
        ...state.match,
        participants: state.match.participants + payload.count
      };
      return {
        ...state,
        match: updatedMatchInc,
        matches: state.matches.map((match) =>
          match._id === payload.matchId ? updatedMatchInc : match
        )
      };
    case DECREASE_PARTICIPANT_COUNT:
      const updatedMatchDec = {
        ...state.match,
        participants: state.match.participants - payload.count
      };
      return {
        ...state,
        match: updatedMatchDec,
        matches: state.matches.map((match) =>
          match._id === payload.matchId ? updatedMatchDec : match
        )
      };
    default:
      return state;
  }
};

export default matchReducer;
