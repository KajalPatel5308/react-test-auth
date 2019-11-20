import { fromJS } from 'immutable';

import login from '../reducer';
import { changeEmail, changePassowrd } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      email: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(login(undefined, {})).toEqual(expectedResult);
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
});
