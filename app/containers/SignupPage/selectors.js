/**
 * LoginPage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.get('login', initialState);

const makeSelectEmail = () =>
  createSelector(selectLogin, State => State.get('email'));

const makeSelectPassword = () =>
  createSelector(selectLogin, State => State.get('password'));

export { selectLogin, makeSelectEmail, makeSelectPassword };
