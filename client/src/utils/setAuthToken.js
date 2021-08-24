import api from './api';
import imgApi from './imgApi';

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    imgApi.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete api.defaults.headers.common['Authorization'];
    delete imgApi.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
