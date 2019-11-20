import { fromJS } from 'immutable';

import { selectLogin, makeSelectEmail, makeSelectPassword } from '../selectors';

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
