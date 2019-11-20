import { put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { makeSelectEmail } from 'containers/LoginPage/selectors';
import { SUBMIT_SIGNUP } from './constants';

/**
 * Github repos request/response handler
 */
export function* onSignup() {
  const email = yield select(makeSelectEmail());
  const userInfo = JSON.parse(localStorage.getItem('loginData'));
  const users = [];
  users.push(userInfo);
  localStorage.setItem('users', JSON.stringify(users));
  if (userInfo.email === email) {
    yield put(push('/home'));
  }
}

export default function* githubData() {
  yield takeLatest(SUBMIT_SIGNUP, onSignup);
}
