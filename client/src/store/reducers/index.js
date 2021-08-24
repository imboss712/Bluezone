import { combineReducers } from 'redux';

import authReducer from './auth';
import alertReducer from './alert';
import profileReducer from './profile';
import matchReducer from './match';
import teamReducer from './team';
import transactionReducer from './transaction';
import payoutReducer from './payout';
import feedbackReducer from './feedback';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
  match: matchReducer,
  team: teamReducer,
  transaction: transactionReducer,
  payout: payoutReducer,
  feedback: feedbackReducer
});
