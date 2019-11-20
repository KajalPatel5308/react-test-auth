import { fromJS } from 'immutable';

import login from '../reducer';
import {
  changeFirstName,
  changeLastName,
  changeEmail,
  changePassowrd,
  onSubmitSignupForm,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(login(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeFirstName action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('firstName', fixture);

    expect(login(state, changeFirstName(fixture))).toEqual(expectedResult);
  });
  it('should handle the changeLastName action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('lastName', fixture);

    expect(login(state, changeLastName(fixture))).toEqual(expectedResult);
  });
  it('should handle the changeEmail action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('email', fixture);

    expect(login(state, changeEmail(fixture))).toEqual(expectedResult);
  });
  it('should handle the changePassowrd action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('password', fixture);

    expect(login(state, changePassowrd(fixture))).toEqual(expectedResult);
  });
  it('should handle the onSubmitSignupForm action correctly', () => {
    const userInfo = {
      firstName: 'test',
      lastName: 'test',
      email: 'test',
      age: 23,
      address: 'dsdsds',
      file: '',
      authToken: 'dsjkdks',
    };
    const expectedResult = state;
    expect(login(state, onSubmitSignupForm(userInfo))).toEqual(expectedResult);
  });
});
