import React from "react";
import loginIcon from "./assets/loginIcon.svg";

const LoginButton = () => {
  return (
    <button className="btn login-button">
      <img src={loginIcon} alt="Login" onClick={() => console.log("Login button clicked")}/>
    </button>
  );
};

export default LoginButton;