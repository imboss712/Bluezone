import api from '../../utils/api';
import { setAlert } from './alert';

import { CREATE_FEEDBACK, GET_FEEDBACKS, FEEDBACKS_ERROR } from './actionTypes';

// Create feedback
export const createFeedback = (feedbackData) => async (dispatch) => {
  try {
    const res = await api.post('/feedbacks', feedbackData);

    dispatch({
      type: CREATE_FEEDBACK,
      payload: res.data
    });

    dispatch(setAlert('Feedback sent successfully', 'success'));
  } catch (err) {
    dispatch(setAlert('Something went wrong', 'error'));
  }
};

// Get feedbacks
export const getFeedbacks = () => async (dispatch) => {
  try {
    const res = await api.get('/feedbacks');

    dispatch({
      type: GET_FEEDBACKS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FEEDBACKS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
