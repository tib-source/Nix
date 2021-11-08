import React, { useState, useEffect, useRef } from "react";
import Logo from "./../../Images/Brand/Nix-Logo.png";
import Input from "./Input";
import * as Style from "./LoginSyle";
const LoginPage = ({ history, authenticated, setAuthenticated }) => {
  const button = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //This works - Please dont change anything related to this
    if (username == "Tib" && password == "123") {
      setAuthenticated(true);
    }
  };

  return (
    <Style.LoginContainer className="login">
      <Style.LoginWrapper>
        <Style.Icon>
          <img src={Logo} alt="Logo" />
        </Style.Icon>
        <Style.Line />
        <Style.Form>
          <Input
            type="text"
            label="username"
            state={username}
            setState={setUsername}
          />
          <Input
            type="password"
            label="password"
            state={password}
            setState={setPassword}
          />
          <Style.Button onClick={handleLogin} ref={button}>
            Submit
          </Style.Button>
        </Style.Form>
        <Style.Forgot to="/">Forgot Password ?</Style.Forgot>

        <Style.NewUser>
          New here? <Style.Forgot to="/signup">Sign Up</Style.Forgot>
        </Style.NewUser>
      </Style.LoginWrapper>
    </Style.LoginContainer>
  );
};

export default LoginPage;
