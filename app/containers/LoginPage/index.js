import React from 'react';
import PropTypes from 'prop-types';
import base from 'base-64';
import { Link, withRouter } from 'react-router-dom';
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
import { changeEmail, changePassowrd } from './actions';
import { makeSelectEmail, makeSelectPassword } from './selectors';
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

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  onHandleSubmit = evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const userInfo = {
      email: this.props.email,
      password: this.props.password,
    };
    const token = base.encode(userInfo);
    const isAuthanticated = users.find(
      user => user.authToken === token && user.email === this.props.email,
    );
    if (isAuthanticated) {
      localStorage.setItem('loginData', JSON.stringify(isAuthanticated));
      this.props.history.push('/home');
    } else {
      this.setState({ isError: true });
    }
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
          {this.state.isError && (
            <span>Please enter valid email and password</span>
          )}
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
              <FormattedMessage {...messages.login} />
            </Button>
            <ButtonLink to="/signup">
              <FormattedMessage {...messages.signup} />
            </ButtonLink>
          </div>
        </Form>
      </div>
    );
  }
}
LoginPage.propTypes = {
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  history: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassowrd(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
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
)(withRouter(LoginPage));
