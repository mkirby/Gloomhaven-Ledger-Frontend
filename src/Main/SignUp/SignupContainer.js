import React from "react";
import { Image } from "semantic-ui-react";
import "../Login/AuthContainer.css";
import SignupForm from "./SignupForm";

function SignupContainer() {
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
        <h1>Signup</h1>
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupContainer;
