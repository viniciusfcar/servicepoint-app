import { combineReducers } from 'redux';

import { authReducer } from './features/auth/auth-slice';

export default combineReducers({ authReducer });
