import React from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { connect } from "react-redux";

import { userActions } from "../../_actions/userActions";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    username: "",
    usernameValid: false,
    password: "",
    passwordValid: false,
    formValid: false,
  };

  validateForm = () => {
    const { usernameValid, passwordValid } = this.state;
    this.setState({
      formValid: usernameValid && passwordValid,
    });
  };

  updateUsername = (username) => {
    this.setState({ username }, this.validateUsername);
  };

  validateUsername = () => {
    // validates the username being inputted into the controlled form
    let usernameValid = this.state.username.length > 2;
    // length of 3 or more characters

    // only re-set state if the value has changed
    if (usernameValid !== this.state.usernameValid) {
      this.setState({ usernameValid }, this.validateForm);
    }
  };

  updatePassword = (password) => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    // validate the password being inputted into the controlled form
    const { password } = this.state;

    // if the password meets params then it's valid
    let passwordValid =
      password.length > 7 && /\d/.test(password) && /[!@#$%^&*]/.test(password);
    // length of 8 or more characters
    // contains 1+ digits
    // contains 1+ special characters

    // only re-set state if the value has changed
    if (passwordValid !== this.state.passwordValid) {
      this.setState({ passwordValid }, this.validateForm);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
    this.setState({
      username: "",
      usernameValid: false,
      password: "",
      passwordValid: false,
      formValid: false,
    });
  };

  render() {
    return (
      <Form style={{ width: "400px" }} warning>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.updateUsername(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.updatePassword(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={this.handleSubmit} content="Login" />
        <Link to="/signup">
          <Button content="Sign Up" />
        </Link>

        <Message warning>
          <Message.Header>Login Reminders</Message.Header>
          <Message.List>
            <Message.Item>
              Username must be at least 3 characters long
            </Message.Item>
            <Message.Item>
              Password must be a least 8 characters long
            </Message.Item>
            <Message.Item>
              Password must contain at least one digit
            </Message.Item>
            <Message.Item>
              Password must contain at least one special character: !@#$%^&*
            </Message.Item>
          </Message.List>
        </Message>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const actionCreators = {
  login: userActions.login,
};

export default connect(mapStateToProps, actionCreators)(LoginForm);
