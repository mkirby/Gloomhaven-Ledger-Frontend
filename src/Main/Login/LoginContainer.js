import React from "react";
import { Image } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import "./AuthContainer.css";

function LoginContainer() {
  return (
    <div className="auth">
      <div className="auth__image">
        <Image
          src={process.env.PUBLIC_URL + "/images/box-art/Gloomhaven.jpg"}
          alt={"Gloomhaven box art"}
          rounded
        />
      </div>
      <div className="auth__form">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginContainer;
