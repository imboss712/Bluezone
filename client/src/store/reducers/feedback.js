import {
  CREATE_FEEDBACK,
  GET_FEEDBACKS,
  FEEDBACKS_ERROR
} from '../actions/actionTypes';

const initialState = {
  feedbacks: [],
  feedbacksError: {},
  feedbacksLoading: true
};

const feedbackReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_FEEDBACK:
      return {
        ...state,
        feedbacks: [payload, ...state.feedbacks]
      };
    case GET_FEEDBACKS:
      return {
        ...state,
        feedbacks: payload,
        feedbacksLoading: false,
        feedbacksError: {}
      };
    case FEEDBACKS_ERROR:
      return {
        ...state,
        feedbacksError: payload,
        feedbacksLoading: false
      };
    default:
      return state;
  }
};

export default feedbackReducer;
