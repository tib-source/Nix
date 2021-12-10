import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../Images/Brand/Nix-white-bg.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: wheat;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 1rem 2rem;
  border: 1px solid black;
  box-shadow: 2px 2px 1px orange; 
`

const
const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Hello</h2>
        <Link to="/login">Login</Link> <br />
        <Link to="/signup">Sign Up</Link> <br />
        {/* <Link to="/dashboard">dashboard</Link> */}
      </Wrapper>
    </Container>
  );
};

export default HomePage;
