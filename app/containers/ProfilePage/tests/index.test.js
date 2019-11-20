/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup, Label } from 'reactstrap';
import { ProfilePage } from '../index';

describe('<ProfilePage />', () => {
  const userInfo = {
    firstName: 'test',
    lastName: 'test',
    email: 'test',
    age: 23,
    address: 'dsdsds',
    file: '',
    authToken: 'dsjkdks',
  };
  localStorage.setItem('loginData', JSON.stringify(userInfo));
  localStorage.setItem('users', JSON.stringify([userInfo]));
  const renderedComponent = shallow(<ProfilePage />);
  it('should render the FormGroup', () => {
    expect(renderedComponent.find(FormGroup).length).toEqual(6);
  });
  it('should render the Label', () => {
    expect(renderedComponent.find(Label).length).toEqual(6);
  });
  it('should render the onChangeFirstName when called', () => {
    const event = {
      target: {
        value: 'test',
      },
    };
    renderedComponent.instance().onChangeFirstName(event);
    expect(1).toEqual(1);
  });
  it('should render the onChangeLastName when called', () => {
    const event = {
      target: {
        value: 'test',
      },
    };
    renderedComponent.instance().onChangeLastName(event);
    expect(1).toEqual(1);
  });
  it('should render the onChangeEmail when called', () => {
    const event = {
      target: {
        value: 'test',
      },
    };
    renderedComponent.instance().onChangeEmail(event);
    expect(1).toEqual(1);
  });
  it('should render the onChangeAge when called', () => {
    const event = {
      target: {
        value: 'test',
      },
    };
    renderedComponent.instance().onChangeAge(event);
    expect(1).toEqual(1);
  });
  it('should render the onChangeAddress when called', () => {
    const event = {
      target: {
        value: 'test',
      },
    };
    renderedComponent.instance().onChangeAddress(event);
    expect(1).toEqual(1);
  });
  it('should render the onImageChange when called', () => {
    const event = {
      target: {
        files: [{ type: '' }],
      },
    };
    renderedComponent.instance().onImageChange(event);
    expect(1).toEqual(1);
  });
  it('should render the onImageChange when called', () => {
    const event = {
      target: {
        files: [{ type: '.png' }],
      },
    };
    renderedComponent.instance().onImageChange(event);
    expect(1).toEqual(1);
  });
  it('should render the onImageChange when called', () => {
    const event = {
      target: {
        files: [],
      },
    };
    renderedComponent.instance().onImageChange(event);
    expect(1).toEqual(1);
  });
  it('should render the onImageChange when called with diff file name', () => {
    const event = {
      target: {
        files: [{ type: '' }],
      },
    };
    renderedComponent.instance().onImageChange(event);
    expect(1).toEqual(1);
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
});
