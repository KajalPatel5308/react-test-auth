import { CHANGE_EMAIL, CHANGE_PASSWORD } from './constants';

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

export function changePassowrd(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
