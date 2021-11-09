import React, { useState, useRef } from "react";
import * as Style from "./../Login/LoginSyle";
import Input from "../Utils/Input";
import Logo from "./../../Images/Brand/Nix-Logo.png";
import { signupNewUser } from "./SignupActions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const SignUpPage = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const button = useRef(null);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(username, password);
    const userdata = {
      username,
      password,
    };
    props.signupNewUser(userdata);
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
            state={username}
            setState={setUsername}
            error={"" || props.createUser.usernameError[0]}
          />
          <Input
            type="email"
            label="email"
            error={"" || props.createUser.passwordError[0]}
            state={email}
            setState={setEmail}
          />
          <Input
            type="password"
            label="password"
            error={"" || props.createUser.passwordError[0]}
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

SignUpPage.propTypes = {
  signupNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    createUser: state.createUser,
  };
};
export default connect(mapStateToProps, { signupNewUser })(
  withRouter(SignUpPage)
);
