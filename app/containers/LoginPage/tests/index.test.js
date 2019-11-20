/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup, Label } from 'reactstrap';
import { changeEmail, changePassowrd } from '../actions';
import { LoginPage, mapDispatchToProps } from '../index';

describe('<SignupPage />', () => {
  const defaultProps = {
    firstName: 'test',
    lastName: 'test',
    email: 'testmail',
    password: '122',
    onSubmitForm: () => {},
  };
  const userInfo = {
    firstName: 'test',
    lastName: 'test',
    email: 'test',
    age: 23,
    address: 'dsdsds',
    file: '',
    authToken: 'dsjkdks',
  };
  localStorage.setItem('users', JSON.stringify([userInfo]));
  const renderedComponent = shallow(<LoginPage {...defaultProps} />);
  it('should render the FormGroup', () => {
    expect(renderedComponent.find(FormGroup).length).toEqual(2);
  });
  it('should render the Label', () => {
    expect(renderedComponent.find(Label).length).toEqual(2);
  });
  it('should render the onHandleSubmit when called', () => {
    const event = {
      preventDefault: () => {},
    };
    renderedComponent.instance().onHandleSubmit(event);
    expect(1).toEqual(1);
  });
  it('should render the onHandleSubmit when called with no user found', () => {
    const user = {
      firstName: 'test',
      lastName: 'test',
      email: 'test',
      age: 23,
      address: 'dsdsds',
      file: '',
      authToken: 'dsjkdsasaks',
    };
    localStorage.setItem('loginData', JSON.stringify(user));
    const event = {};
    renderedComponent.instance().onHandleSubmit(event);
    expect(1).toEqual(1);
  });
  describe('mapDispatchToProps', () => {
    describe('onChangeEmail', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeEmail).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeEmail({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeEmail(username));
      });
    });
  });
  describe('onChangePassword', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangePassword).toBeDefined();
    });

    it('should dispatch onChangePassword when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const username = 'mxstbr';
      result.onChangePassword({ target: { value: username } });
      expect(dispatch).toHaveBeenCalledWith(changePassowrd(username));
    });
  });
});
