import {
  GET_WITHDRAWAL_REQUESTS,
  WITHDRAWAL_REQUESTS_ERROR,
  SEND_PAYOUT,
  SEND_PAYOUT_ERROR
} from '../actions/actionTypes';

const initialState = {
  requests: [],
  requestsError: {},
  payoutError: {},
  loading: true
};

const payoutReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WITHDRAWAL_REQUESTS:
      return { ...state, requests: payload, loading: false, requestsError: {} };
    case WITHDRAWAL_REQUESTS_ERROR:
      return { ...state, requestsError: payload, loading: false };
    case SEND_PAYOUT:
      return {
        ...state,
        requests: state.requests.filter((req) => req._id !== payload._id),
        loading: false,
        payoutError: {}
      };
    case SEND_PAYOUT_ERROR:
      return { ...state, payoutError: payload, loading: false };
    default:
      return state;
  }
};

export default payoutReducer;
