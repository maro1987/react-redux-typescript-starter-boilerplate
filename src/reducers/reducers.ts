import { Reducer, combineReducers } from 'redux';
import appReducer from './app-action-reducers';

const reducers: Reducer = combineReducers({
  appReducer
});

export default reducers;
