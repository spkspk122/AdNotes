import {combineReducers} from 'redux';

import {notesReducer} from './notesReducer';

const reducers = combineReducers({
  notesReducer: notesReducer,
});

export default reducers;
