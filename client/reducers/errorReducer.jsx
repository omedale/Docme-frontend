import * as types from '../actions/actionTypes'
import initialState from './initialState';
export default function errorReducer(state = initialState.errors, action) {
  switch (action.type) {
    case types.ERROR_MESSAGE:
      return action.errors;

    default:
      return state;
  }
}