import React, { useState } from "react";
import * as Style from "./../Login/LoginSyle";
import Input from "../Login/Input";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
            label="password1"
            error={""}
            state={password}
            setState={setPassword}
          />
          <Style.Button onClick={handleLogin} ref={button}>
            Submit
          </Style.Button>
        </Style.Form>
        <Style.Forgot to="/">Forgot Password ?</Style.Forgot>

        <Style.NewUser>
          New here? <Style.Forgot to="/">Sign Up</Style.Forgot>
        </Style.NewUser>
      </Style.LoginWrapper>
    </Style.LoginContainer>
  );
};

export default SignUpPage;
