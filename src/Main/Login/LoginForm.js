import React from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";

import { userActions } from "../../_actions/userActions";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div>{props.message}</div>;
  }
  return null;
}

class LoginForm extends React.Component {
  state = {
    username: "",
    usernameValid: false,
    password: "",
    passwordValid: false,
    formValid: false,
    errorMsg: {},
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
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = "Usernames must be at least 3 characters long";
    }

    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  updatePassword = (password) => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password.length < 8) {
      passwordValid = false;
      errorMsg.password = "Password must be a least 8 characters long";
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMsg.password = "Password must contain at least one digit";
    } else if (!/[!@#$%^&*]/.test(password)) {
      passwordValid = false;
      errorMsg.password =
        "Password must contain at least one special character: !@#$%^&*";
    }
    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
    this.setState({
      username: "",
      usernameValid: false,
      password: "",
      passwordValid: false,
      formValid: false,
      errorMsg: {},
    });
  };

  render() {
    return (
      <Form style={{ width: "400px" }}>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.updateUsername(e.target.value)}
          />
          <ValidationMessage
            valid={this.state.usernameValid}
            message={this.state.errorMsg.username}
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
          <ValidationMessage
            valid={this.state.passwordValid}
            message={this.state.errorMsg.password}
          />
        </Form.Field>
        <Button
          type="submit"
          disabled={!this.state.formValid}
          onClick={this.handleSubmit}
        >
          Login
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
};

export default connect(mapStateToProps, actionCreators)(LoginForm);
