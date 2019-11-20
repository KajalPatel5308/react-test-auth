import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  SUBMIT_SIGNUP,
} from '../constants';

import {
  changeFirstName,
  changeLastName,
  changeEmail,
  changePassowrd,
  onSubmitSignupForm,
} from '../actions';

describe('signup Actions', () => {
  describe('changeFirstName', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_FIRST_NAME,
        firstName: fixture,
      };

      expect(changeFirstName(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeLastName', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_LAST_NAME,
        lastName: fixture,
      };

      expect(changeLastName(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeEmail', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_EMAIL,
        email: fixture,
      };

      expect(changeEmail(fixture)).toEqual(expectedResult);
    });
  });
  describe('changePassowrd', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password: fixture,
      };

      expect(changePassowrd(fixture)).toEqual(expectedResult);
    });
  });
  describe('onSubmitSignupForm', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = {};
      const expectedResult = {
        type: SUBMIT_SIGNUP,
        data: fixture,
      };

      expect(onSubmitSignupForm(fixture)).toEqual(expectedResult);
    });
  });
});
