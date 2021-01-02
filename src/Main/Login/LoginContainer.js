import React from "react";
import { Placeholder } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import "./LoginContainer.css";

function LoginContainer() {
  return (
    <div className="login">
      <div className="login__image">
        <Placeholder style={{ width: "100%", height: "100%" }}>
          <Placeholder.Image />
        </Placeholder>
      </div>
      <div className="login__form">
        <h3>Component: LoginContainer.js</h3>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginContainer;
