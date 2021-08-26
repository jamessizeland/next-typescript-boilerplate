// All reducers that we write will be funnelled through this reeducer

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
});