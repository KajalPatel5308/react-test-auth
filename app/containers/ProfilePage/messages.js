/*
 * LoginPage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'react.Loginpage';

export default defineMessages({
  title: {
    id: `${scope}.head`,
    defaultMessage: 'Signup',
  },
  metaTitle: {
    id: `${scope}.title`,
    defaultMessage: 'React-Signup',
  },
  metaDescriptions: {
    id: `${scope}.description`,
    defaultMessage: 'React-Signup',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'First Name',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last Name',
  },
  age: {
    id: `${scope}.Age`,
    defaultMessage: 'Age',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Address',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  // login: {
  //   id: `${scope}.login`,
  //   defaultMessage: 'Login',
  // },
  save: {
    id: `${scope}.Save`,
    defaultMessage: 'Save',
  },
});
