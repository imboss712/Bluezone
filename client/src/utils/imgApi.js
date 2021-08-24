import axios from 'axios';

import { store } from '../store';
import { LOGOUT } from '../store/actions/actionTypes';

const imgApi = axios.create({
  baseURL: '/api',
  headers: {
    accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }
});

imgApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default imgApi;
