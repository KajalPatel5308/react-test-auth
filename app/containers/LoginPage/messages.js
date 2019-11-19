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
    defaultMessage: 'Login',
  },
  metaTitle: {
    id: `${scope}.title`,
    defaultMessage: 'React-Login',
  },
  metaDescriptions: {
    id: `${scope}.description`,
    defaultMessage: 'React-Login',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'SignUp',
  },
});
