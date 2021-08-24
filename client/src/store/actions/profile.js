import api from '../../utils/api';
import imgApi from '../../utils/imgApi';

import { setAlert } from './alert';
import { setProfileTrue, setAvatarTrue, setAvatarFalse } from './auth';

import {
  GET_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  AVATAR_ERROR,
  UPLOAD_AVATAR,
  DELETE_AVATAR,
  GET_AVATAR
} from './actionTypes';

// Get own profile
export const getMyProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/profile/me');

    dispatch({
      type: 'GET_PROFILE',
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Get profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Create profile
export const createProfile = (profileData, history) => async (dispatch) => {
  try {
    const res = await api.post('/profile', profileData);

    dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Profile created successfully', 'success'));
    dispatch(setProfileTrue());
    history.push('/upload-avatar');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
  }
};

// Update profile
export const updateProfile = (profileData, history) => async (dispatch) => {
  try {
    const res = await api.patch('/profile/me', profileData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Profile updated successfully', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to update profile', 'error'));
    }
  }
};

// Get Avatar By userId
export const getAvatar = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/profile/user/${userId}/avatar`);

    dispatch({
      type: GET_AVATAR,
      payload: res.data.avatar
    });
  } catch (err) {
    dispatch({
      type: AVATAR_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Upload own avatar
export const uploadAvatar = (avatarData, history) => async (dispatch) => {
  try {
    await imgApi.post('/profile/me/avatar', avatarData);

    dispatch({
      type: UPLOAD_AVATAR
    });

    dispatch(setAlert('Profile picture uploaded successfully', 'success'));
    dispatch(setAvatarTrue());
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to upload picture', 'error'));
    }
  }
};

// Delete own avatar
export const deleteAvatar = () => async (dispatch) => {
  try {
    await api.delete('/profile/me/avatar');

    dispatch({
      type: DELETE_AVATAR
    });
    dispatch(setAlert('Profile picture deleted successfully', 'success'));
    dispatch(setAvatarFalse());
  } catch (err) {
    dispatch(setAlert('Failed to delete profile picture', 'error'));
  }
};
