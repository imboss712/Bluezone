import api from '../../utils/api';

import {
  GET_PAYOUT_REQUESTS,
  PAYOUT_REQUESTS_ERROR,
  SEND_PAYOUT_LINK,
  SEND_PAYOUT_ERROR
} from './actionTypes';

// Get payout requests
export const getPayoutRequests = () => async (dispatch) => {
  try {
    const res = await api.get('/users/withdrawal-requets');

    dispatch({
      type: GET_PAYOUT_REQUESTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PAYOUT_REQUESTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Send payout link
export const sendPayoutLink = (phoneData) => async (dispatch) => {
  try {
    const res = await api.post('/users/send-payout-link', phoneData);

    dispatch({
      type: SEND_PAYOUT_LINK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEND_PAYOUT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
