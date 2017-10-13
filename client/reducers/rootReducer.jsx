import {combineReducers} from 'redux';
import documents from './documentReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({ 
  documents,
  errors
});

export default rootReducer