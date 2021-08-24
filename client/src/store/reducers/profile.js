import {
  GET_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  AVATAR_ERROR,
  GET_AVATAR,
  UPLOAD_AVATAR,
  DELETE_AVATAR
} from '../actions/actionTypes';

const initialState = {
  avatar: null,
  profile: null,
  loading: true,
  avatarLoading: true,
  avatarError: {},
  profileError: {}
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case CREATE_PROFILE:
    case UPDATE_PROFILE:
      return { ...state, profile: payload, loading: false, profileError: {} };
    case PROFILE_ERROR:
      return { ...state, profileError: payload, loading: false, profile: null };
    case GET_AVATAR:
      return {
        ...state,
        avatar: payload,
        avatarLoading: false,
        avatarError: {}
      };
    case UPLOAD_AVATAR:
      return { ...state, avatarLoading: false };
    case DELETE_AVATAR:
      return { ...state, avatar: null, avatarLoading: false };
    case AVATAR_ERROR:
      return {
        ...state,
        avatarError: payload,
        avatarLoading: false,
        avatar: null
      };
    default:
      return state;
  }
};

export default profileReducer;
