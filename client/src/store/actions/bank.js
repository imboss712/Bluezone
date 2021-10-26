import api from '../../utils/api';

import { setAlert } from './alert';
import { setBankTrue } from './auth';

import {
  GET_BANK_DETAILS,
  GET_BANK_DETAIL_BY_ID,
  CREATE_BANK_DETAILS,
  EDIT_BANK_DETAILS,
  BANK_ERROR
} from './actionTypes';

// Get own bank details
export const getBankDetails = () => async (dispatch) => {
  try {
    const res = await api.get('/bank');

    dispatch({
      type: GET_BANK_DETAILS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Get bank detail by userId
export const getBankDetailById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/bank/${userId}`);

    dispatch({
      type: GET_BANK_DETAIL_BY_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Create bank details
export const createBankDetails = (bankData, history) => async (dispatch) => {
  try {
    const res = await api.post('/bank', bankData);

    dispatch({
      type: CREATE_BANK_DETAILS,
      payload: res.data
    });

    dispatch(setAlert('Bank details added successfully', 'success'));
    dispatch(setBankTrue());

    history.push('/wallet');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
  }
};

// Edit bank details
export const editBankDetails = (bankData, history) => async (dispatch) => {
  try {
    const res = await api.patch('/bank', bankData);

    dispatch({
      type: EDIT_BANK_DETAILS,
      payload: res.data
    });

    dispatch(setAlert('Bank details updated successfully', 'success'));

    history.push('/wallet');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    } else {
      dispatch(setAlert('Failed to update bank details', 'error'));
    }
  }
};
