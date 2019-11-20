import { fromJS } from 'immutable';

import {
  selectLogin,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectFirstName,
  makeSelectLastName,
} from '../selectors';

describe('selectLogin', () => {
  it('should select the home state', () => {
    const loginState = fromJS({
      email: {},
    });
    const mockedState = fromJS({
      login: loginState,
    });
    expect(selectLogin(mockedState)).toEqual(loginState);
  });
});

describe('makeSelectEmail', () => {
  const emailSelector = makeSelectEmail();
  it('should select the username', () => {
    const email = 'mxstbr';
    const mockedState = fromJS({
      login: {
        email,
      },
    });
    expect(emailSelector(mockedState)).toEqual(email);
  });
});

describe('makeSelectPassword', () => {
  const passwordSelector = makeSelectPassword();
  it('should select the username', () => {
    const password = 'mxstbr';
    const mockedState = fromJS({
      login: {
        password,
      },
    });
    expect(passwordSelector(mockedState)).toEqual(password);
  });
});
describe('makeSelectFirstName', () => {
  const fNameSelector = makeSelectFirstName();
  it('should select the username', () => {
    const firstName = 'mxstbr';
    const mockedState = fromJS({
      login: {
        firstName,
      },
    });
    expect(fNameSelector(mockedState)).toEqual(firstName);
  });
});
describe('makeSelectLastName', () => {
  const lNameSelector = makeSelectLastName();
  it('should select the username', () => {
    const lastName = 'mxstbr';
    const mockedState = fromJS({
      login: {
        lastName,
      },
    });
    expect(lNameSelector(mockedState)).toEqual(lastName);
  });
});
