import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  SUBMIT_SIGNUP,
} from './constants';

export function changeFirstName(firstName) {
  return {
    type: CHANGE_FIRST_NAME,
    firstName,
  };
}

export function changeLastName(lastName) {
  return {
    type: CHANGE_LAST_NAME,
    lastName,
  };
}

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

export function onSubmitSignupForm(data) {
  return {
    type: SUBMIT_SIGNUP,
    data,
  };
}
