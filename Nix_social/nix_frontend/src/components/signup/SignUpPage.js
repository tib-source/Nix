import React, { useState, useRef } from "react";
import * as Style from "./../Login/LoginSyle";
import Input from "../Login/Input";
import Logo from "./../../Images/Brand/Nix-Logo.png";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const button = useRef(null);

  const handleSignup = (e) => {
    e.preventDefault();
    //This works - Please dont change anything related to this
    if (username == "Tib" && password == "123") {
      setAuthenticated(true);
    }
  };
  return (
    <Style.LoginContainer className="signup">
      <Style.LoginWrapper>
        <Style.Icon>
          <img src={Logo} alt="Logo" />
        </Style.Icon>
        <Style.Line />
        <Style.Form>
          <Input
            type="text"
            label="username"
            error={""}
            state={username}
            setState={setUsername}
          />
          <Input
            type="email"
            label="email"
            error={""}
            state={email}
            setState={setEmail}
          />
          <Input
            type="password"
            label="password"
            error={""}
            state={password}
            setState={setPassword}
          />
          <Style.Button onClick={handleSignup} ref={button}>
            Sign Up
          </Style.Button>
        </Style.Form>
        <Style.Forgot to="/">Forgot Password ?</Style.Forgot>

        <Style.NewUser>
          Got An Account? <Style.Forgot to="/login">Login</Style.Forgot>
        </Style.NewUser>
      </Style.LoginWrapper>
    </Style.LoginContainer>
  );
};

export default SignUpPage;
