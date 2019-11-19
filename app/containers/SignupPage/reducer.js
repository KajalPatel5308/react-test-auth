import { fromJS } from 'immutable';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
} from './constants';

export const initialState = fromJS({
  email: '',
});

function login(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    case CHANGE_LAST_NAME:
      return state.set('email', action.lastName);
    case CHANGE_FIRST_NAME:
      return state.set('email', action.firstName);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    default:
      return state;
  }
}

export default login;
