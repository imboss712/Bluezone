import { combineReducers } from 'redux';

import authReducer from './auth';
import alertReducer from './alert';
import profileReducer from './profile';
import matchReducer from './match';
import teamReducer from './team';
import walletReducer from './wallet';
import bankReducer from './bank';
import withdrawalReducer from './withdrawal';
import feedbackReducer from './feedback';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
  match: matchReducer,
  team: teamReducer,
  wallet: walletReducer,
  bank: bankReducer,
  withdrawal: withdrawalReducer,
  feedback: feedbackReducer
});
