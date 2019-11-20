import { fromJS } from 'immutable';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  SUBMIT_SIGNUP,
} from './constants';

export const initialState = fromJS({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
});

function login(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    case CHANGE_LAST_NAME:
      return state.set('lastName', action.lastName);
    case CHANGE_FIRST_NAME:
      return state.set('firstName', action.firstName);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case SUBMIT_SIGNUP:
      localStorage.setItem('loginData', JSON.stringify(action.data));
      return state;
    default:
      return state;
  }
}

export default login;
