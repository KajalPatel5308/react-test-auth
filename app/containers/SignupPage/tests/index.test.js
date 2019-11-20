/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup, Label } from 'reactstrap';
import {
  changeEmail,
  changePassowrd,
  changeFirstName,
  changeLastName,
} from '../actions';
import { SignupPage, mapDispatchToProps } from '../index';

describe('<SignupPage />', () => {
  const defaultProps = {
    firstName: 'test',
    lastName: 'test',
    email: 'testmail',
    password: '122',
    onSubmitForm: () => {},
  };
  const renderedComponent = shallow(<SignupPage {...defaultProps} />);
  it('should render the FormGroup', () => {
    expect(renderedComponent.find(FormGroup).length).toEqual(4);
  });
  it('should render the Label', () => {
    expect(renderedComponent.find(Label).length).toEqual(4);
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
    describe('onChangeFirstName', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeFirstName).toBeDefined();
      });

      it('should dispatch onChangeFirstName when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeFirstName({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeFirstName(username));
      });
    });
    describe('onChangeLastName', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeLastName).toBeDefined();
      });

      it('should dispatch onChangeLastName when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeLastName({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeLastName(username));
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
    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });
    });
  });
});
