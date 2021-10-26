import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFY_USER,
  VERIFY_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER,
  USER_ERROR,
  UPDATE_USER,
  DELETE_USER,
  SET_PROFILE_TRUE,
  SET_BANK_TRUE,
  SET_AVATAR_TRUE,
  SET_AVATAR_FALSE,
  LOGOUT,
  LOGOUT_ALL,
  ADD_AMOUNT,
  REQUEST_AMOUNT
} from '../actions/actionTypes';

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
  error: {}
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: payload
      };
    case VERIFY_USER:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
        error: {}
      };
    case VERIFY_FAIL:
      return { ...state, isAuthenticated: false, loading: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: { ...state.user, ...payload }
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, loading: false, isAuthenticated: false };
    case SET_PROFILE_TRUE:
      return { ...state, user: { ...state.user, isProfile: true } };
    case SET_BANK_TRUE:
      return { ...state, user: { ...state.user, isBank: true } };
    case SET_AVATAR_TRUE:
      return { ...state, user: { ...state.user, hasAvatar: true } };
    case SET_AVATAR_FALSE:
      return { ...state, user: { ...state.user, hasAvatar: false } };
    case GET_USER:
    case UPDATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
        error: {}
      };
    case USER_ERROR:
      return {
        ...state,
        isAuthenticated: true,
        error: payload,
        loading: false
      };
    case ADD_AMOUNT:
    case REQUEST_AMOUNT:
      return { ...state, isAuthenticated: true, user: payload, loading: false };
    case LOGOUT:
    case LOGOUT_ALL:
    case DELETE_USER:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
