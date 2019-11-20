import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../constants';

import { changeEmail, changePassowrd } from '../actions';

describe('signup Actions', () => {
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
});
