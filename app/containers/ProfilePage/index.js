import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
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

export class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      address: '',
    };
  }

  componentWillMount() {
    const loginUser = JSON.parse(localStorage.getItem('loginData'));
    // const userInfo =
    this.setState({
      firstName: loginUser.firstName,
      lastName: loginUser.lastName,
      email: loginUser.email,
      age: loginUser.age,
      address: loginUser.address,
    });
  }

  onChangeFirstName = evt => {
    this.setState({
      firstName: evt.target.value,
    });
  };

  onChangeLastName = evt => {
    this.setState({
      lastName: evt.target.value,
    });
  };

  onChangeEmail = evt => {
    this.setState({
      email: evt.target.value,
    });
  };

  onChangeAge = evt => {
    this.setState({
      age: evt.target.value,
    });
  };

  onChangeAddress = evt => {
    this.setState({
      address: evt.target.value,
    });
  };

  onImageChange = e => {
    if (e.target.files[0] !== undefined) {
      const file = e.target.files[0];
      const regex = new RegExp('(.*?).(png|jpg|jpeg)$');
      const reader = new FileReader();
      if (regex.test(file.type)) {
        reader.onloadend = () => {
          const image = new Image();
          image.src = reader.result;
          image.onload = () => {
            this.setState({
              file,
            });
          };
        };
      }
    }
  };

  onHandleSubmit = evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const loginUser = JSON.parse(localStorage.getItem('loginData'));
    const userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      age: this.state.age,
      address: this.state.address,
      file: this.state.file,
      authToken: loginUser.authToken,
    };
    const users = JSON.parse(localStorage.getItem('users'));
    const userArray = users.map(user => {
      if (user.authToken === userInfo.authToken) {
        return userInfo;
      }
      return user;
    });
    localStorage.setItem('loginData', JSON.stringify(userInfo));
    localStorage.setItem('users', JSON.stringify(userArray));
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
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
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
                value={this.state.lastName}
                onChange={this.onChangeLastName}
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
                value={this.state.email}
                onChange={this.onChangeEmail}
                placeholder=""
                type="email"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age">
              <FormattedMessage {...messages.age} />
            </Label>
            <div className="form-control-validated">
              <Input
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
                placeholder=""
                type="number"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">
              <FormattedMessage {...messages.address} />
            </Label>
            <div className="form-control-validated">
              <Input
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
                placeholder=""
                type="text"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">
              <FormattedMessage {...messages.address} />
            </Label>
            <div className="form-control-validated">
              <Input
                className="fileInput"
                type="file"
                accept=".jpeg,.jpg,.png,.bmp"
                onChange={this.onImageChange}
              />
            </div>
          </FormGroup>
          <div>
            <Button type="submit">
              <FormattedMessage {...messages.save} />
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default ProfilePage;
