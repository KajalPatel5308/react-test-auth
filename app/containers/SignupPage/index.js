import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import base from 'base-64';
import { FormGroup, Label } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import {
  changeEmail,
  changePassowrd,
  changeFirstName,
  changeLastName,
  onSubmitSignupForm,
} from './actions';
import {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectFirstName,
  makeSelectLastName,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
// import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
// import { connect } from 'react-redux';

const Form = styled.form`
  margin-bottom: 1em;
`;
Form.displayName = 'Form';

const Input = styled.input`
  outline: none;
  border: 1px solid #a8a8a8;
  padding: 5px;
  width: 40%;
`;
Input.displayName = 'Input';

const Button = styled('button')`
  display: inline-flex;
  padding: 0.25em 2em;
  margin-top: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
Button.displayName = 'Button';

const ButtonLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
ButtonLink.displayName = 'ButtonLink';

export class SignupPage extends React.Component {
  onHandleSubmit = evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const data = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      password: this.props.password,
    };
    const loginData = {
      email: this.props.email,
      password: this.props.password,
    };
    const authToken = base.encode(loginData);
    data.authToken = authToken;
    this.props.onSubmitForm(data);
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>{messages.title.defaultMessage}</title>
          <meta name="title" content={messages.metaTitle.defaultMessage} />
          <meta
            name="description"
            content={messages.metaDescriptions.defaultMessage}
          />
        </Helmet>
        <Form onSubmit={this.onHandleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">
              <FormattedMessage {...messages.firstName} />
            </Label>
            <div className="form-control-validated">
              <Input
                className="form-control"
                value={this.props.firstName}
                onChange={this.props.onChangeFirstName}
                placeholder=""
                type="text"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">
              <FormattedMessage {...messages.lastName} />
            </Label>
            <div className="form-control-validated">
              <Input
                className="form-control"
                value={this.props.lastName}
                onChange={this.props.onChangeLastName}
                placeholder=""
                type="text"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">
              <FormattedMessage {...messages.email} />
            </Label>
            <div className="form-control-validated">
              <Input
                className="form-control"
                value={this.props.email}
                onChange={this.props.onChangeEmail}
                placeholder=""
                type="email"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">
              <FormattedMessage {...messages.password} />
            </Label>
            <div className="form-control-validated">
              <Input
                className="form-control"
                value={this.props.password}
                onChange={this.props.onChangePassword}
                placeholder=""
                type="password"
              />
            </div>
          </FormGroup>
          <div>
            <Button type="submit">
              <FormattedMessage {...messages.signup} />
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
SignupPage.propTypes = {
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFirstName: evt => dispatch(changeFirstName(evt.target.value)),
    onChangeLastName: evt => dispatch(changeLastName(evt.target.value)),
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassowrd(evt.target.value)),
    onSubmitForm: data => dispatch(onSubmitSignupForm(data)),
  };
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  firstName: makeSelectFirstName(),
  lastName: makeSelectLastName(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignupPage);
