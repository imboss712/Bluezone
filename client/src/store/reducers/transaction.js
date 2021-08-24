import {
  GET_TRANSACTIONS,
  GET_PAYOUTS,
  TRANSACTIONS_ERROR,
  PAYOUTS_ERROR,
  ADD_DEPOSIT_TRANSACTION,
  ADD_WITHDRAWAL_TRANSACTION
} from '../actions/actionTypes';

const initialState = {
  transactions: [],
  payouts: [],
  transactionsError: {},
  payoutsError: {},
  transactionsLoading: true,
  payoutsLoading: true
};

const transactionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: payload,
        transactionsLoading: false,
        transactionsError: {}
      };
    case GET_PAYOUTS:
      return {
        ...state,
        payouts: payload,
        payoutsLoading: false,
        payoutsError: {}
      };
    case ADD_DEPOSIT_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
        transactionsLoading: false,
        transactionsError: {}
      };
    case ADD_WITHDRAWAL_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
        transactionsLoading: false,
        transactionsError: {}
      };
    case TRANSACTIONS_ERROR:
      return {
        ...state,
        transactionsError: payload,
        transactionsLoading: false
      };
    case PAYOUTS_ERROR:
      return {
        ...state,
        payoutsError: payload,
        payoutsLoading: false
      };
    default:
      return state;
  }
};

export default transactionReducer;
