import React, { useState, useEffect, useRef } from "react";
import Logo from "./../../Images/Brand/Nix-Logo.png";
import Input from "../Utils/Input";
import * as Style from "./LoginSyle";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { login } from "./LoginActions";

const LoginPage = (props) => {
  const button = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userdata = {
      username,
      password,
    };
    props.login(userdata, "/dashboard");
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

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { login })(withRouter(LoginPage));
