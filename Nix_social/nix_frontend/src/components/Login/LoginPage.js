import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Color } from "../Data/Color";
import Logo from "./../../Images/Brand/Nix-Logo.png";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.login.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: min(90vw, 400px);
  height: 700px;
  background-color: ${Color.login.form};
  border-radius: 0.5rem;
  color: ${Color.login.text};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Icon = styled.div`
  width: 30%;
  height: fit-content;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  label {
    text-align: left;
    width: 100%;
  }
`;

const InputCss = css`
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
`;

const Input = styled.input`
  ${InputCss}
  background: ${Color.login.background};
  border: 1px solid ${Color.login.form};
  &:focus {
    border: 1px solid ${Color.login.text};
  }
`;

const Button = styled.button`
  ${InputCss}
  background: ${Color.login.button};
  font-weight: 700;
  cursor: pointer;
  color: ${Color.login.form};
`;

const Line = styled.hr`
  width: 60%;
  height: 3px;
  background: black;
  border-radius: 10px;
  opacity: 0.5;
  margin: 2rem 0;
`;

const Forgot = styled(Link)`
  margin: 1rem 0rem;
  text-decoration: none;
`;

const NewUser = styled.div`
  margin: 2rem 0;
  padding: 0.5rem;
  width: 60%;
  border: 2px solid ${Color.login.text};
  text-align: center;
  border-radius: 3px;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    opacity: 1;
  }
`;
const LoginPage = ({ history, authenticated, setAuthenticated }) => {
  const button = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);

    if (username == "Tib" && password == "123") {
      console.log("VALID");
      setAuthenticated(true);
    }
  };

  useEffect(() => {
    if (authenticated) {
      console.log("authenticated");
    }
    console.log(authenticated);
  }, []);
  setTimeout(() => console.log(button), 0);
  return (
    <LoginContainer className="login">
      <LoginWrapper>
        <Icon>
          <img src={Logo} alt="Logo" />
        </Icon>
        <Line />
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Input type="password" name="password" id="password" />
          </div>
          <Button onClick={handleLogin} ref={button}>
            Submit
          </Button>
        </Form>
        <Forgot to="/">Forgot Password ?</Forgot>

        <NewUser>
          New here? <Forgot to="/">Sign Up</Forgot>
        </NewUser>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginPage;
