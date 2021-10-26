import {
  GET_BANK_DETAILS,
  GET_BANK_DETAIL_BY_ID,
  CREATE_BANK_DETAILS,
  EDIT_BANK_DETAILS,
  BANK_ERROR
} from '../actions/actionTypes';

const initialState = {
  bank: null,
  loadingBank: true,
  bankError: {}
};

const bankReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BANK_DETAILS:
    case GET_BANK_DETAIL_BY_ID:
    case CREATE_BANK_DETAILS:
    case EDIT_BANK_DETAILS:
      return { ...state, bank: payload, loadingBank: false, bankError: {} };
    case BANK_ERROR:
      return { ...state, bankError: payload, loadingBank: false, bank: null };
    default:
      return state;
  }
};

export default bankReducer;
