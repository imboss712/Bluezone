import api from '../../utils/api';

import { setAlert } from './alert';

import {
  GET_WITHDRAWAL_REQUESTS,
  WITHDRAWAL_REQUESTS_ERROR,
  SEND_PAYOUT,
  SEND_PAYOUT_ERROR
} from './actionTypes';

// Get withdrawal requests
export const getWithdrawalRequests = () => async (dispatch) => {
  try {
    const res = await api.get('/users/withdrawal-requets');

    dispatch({
      type: GET_WITHDRAWAL_REQUESTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WITHDRAWAL_REQUESTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Send payout link
export const sendPayout = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/users/send-payout', userData);

    dispatch({
      type: SEND_PAYOUT,
      payload: res.data
    });

    dispatch(setAlert('Payout link sent successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: SEND_PAYOUT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
