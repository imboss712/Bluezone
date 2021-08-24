import { nanoid } from 'nanoid';

import api from '../../utils/api';

import {
  GET_TRANSACTIONS,
  GET_PAYOUTS,
  TRANSACTIONS_ERROR,
  PAYOUTS_ERROR,
  ADD_DEPOSIT_TRANSACTION,
  ADD_WITHDRAWAL_TRANSACTION
} from './actionTypes';

// Get transactions
export const getTransactions = () => async (dispatch) => {
  try {
    const res = await api.get('/transactions');

    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRANSACTIONS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Get payouts
export const getPayouts = () => async (dispatch) => {
  try {
    const res = await api.get('/users/my-payout-links');

    dispatch({
      type: GET_PAYOUTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PAYOUTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Add deposit transaction
export const addDepositTransaction = (userId, amountData) => (dispatch) => {
  try {
    dispatch({
      type: ADD_DEPOSIT_TRANSACTION,
      payload: {
        _id: nanoid(9),
        from: 'Bank',
        to: 'Wallet',
        type: 'Credited',
        subType: 'Deposit',
        paymentAmount: amountData.amount,
        createdAt: new Date(),
        user: userId
      }
    });
  } catch (err) {
    dispatch({
      type: TRANSACTIONS_ERROR,
      payload: {
        msg: 400,
        status: 'Something went wrong'
      }
    });
  }
};

// Add withdrawal transaction
export const addWithdrawalTransaction = (userId, amountData) => (dispatch) => {
  try {
    dispatch({
      type: ADD_WITHDRAWAL_TRANSACTION,
      payload: {
        _id: nanoid(9),
        from: 'Wallet',
        to: 'Bank',
        type: 'Debited',
        subType: 'Withdraw',
        paymentAmount: amountData.requestedAmount,
        createdAt: new Date(),
        user: userId
      }
    });
  } catch (err) {
    dispatch({
      type: TRANSACTIONS_ERROR,
      payload: {
        msg: 400,
        status: 'Something went wrong'
      }
    });
  }
};
