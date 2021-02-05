import React from "react";
import { Button, Form, Message, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

import { userActions } from "../../_actions/userActions";

class SignupForm extends React.Component {
  state = {
    username: "",
    password: "",
    avatar: "",
    usernameValid: false,
    passwordValid: false,
    avatarValid: false,
    formValid: false,
  };

  validateForm = () => {
    const { usernameValid, passwordValid, avatarValid } = this.state;
    this.setState({
      formValid: usernameValid && passwordValid && avatarValid,
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

  updateAvatar = (e, { value }) => {
    this.setState({ avatar: value }, this.validateAvatar);
  };

  validateAvatar = () => {
    let avatarValid = this.state.avatar !== "";

    if (avatarValid !== this.state.avatarValid) {
      this.setState({ avatarValid }, this.validateForm);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      avatar: this.state.avatar,
    };
    this.props.register({ user });
    this.setState({
      username: "",
      password: "",
      avatar: "",
      usernameValid: false,
      passwordValid: false,
      avatarValid: false,
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

        <Form.Field>
          <label>Avatar</label>
          <Dropdown
            placeholder="Select a Friend"
            fluid
            selection
            options={avatarOptions}
            scrolling
            value={this.state.avatar}
            onChange={this.updateAvatar}
          ></Dropdown>
        </Form.Field>

        <Button
          type="submit"
          onClick={this.handleSubmit}
          content="Register"
          disabled={!this.state.formValid}
        />

        <Message warning>
          <Message.Header>Registration Reminders</Message.Header>
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

const avatarOptions = [
  {
    key: "/images/avatars/Color/128px/01-dog.png",
    text: "",
    value: "/images/avatars/Color/128px/01-dog.png",
    image: { src: "/images/avatars/Color/128px/01-dog.png" },
  },
  {
    key: "/images/avatars/Color/128px/02-puppy.png",
    text: "",
    value: "/images/avatars/Color/128px/02-puppy.png",
    image: { src: "/images/avatars/Color/128px/02-puppy.png" },
  },
  {
    key: "/images/avatars/Color/128px/03-cat.png",
    text: "",
    value: "/images/avatars/Color/128px/03-cat.png",
    image: { src: "/images/avatars/Color/128px/03-cat.png" },
  },
  {
    key: "/images/avatars/Color/128px/04-cat.png",
    text: "",
    value: "/images/avatars/Color/128px/04-cat.png",
    image: { src: "/images/avatars/Color/128px/04-cat.png" },
  },
  {
    key: "/images/avatars/Color/128px/05-bear.png",
    text: "",
    value: "/images/avatars/Color/128px/05-bear.png",
    image: { src: "/images/avatars/Color/128px/05-bear.png" },
  },
  {
    key: "/images/avatars/Color/128px/06-panda.png",
    text: "",
    value: "/images/avatars/Color/128px/06-panda.png",
    image: { src: "/images/avatars/Color/128px/06-panda.png" },
  },
];

function mapStateToProps(state) {
  return {};
}

const actionCreators = {
  register: userActions.register,
};

export default connect(mapStateToProps, actionCreators)(SignupForm);
