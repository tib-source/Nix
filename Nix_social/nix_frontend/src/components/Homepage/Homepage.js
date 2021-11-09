import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../Images/Brand/Nix-white-bg.png";

const HomePage = () => {
  const authenticated = false;

  return (
    <div>
      {/* {authenticated ? (
        <Dashboard setAuthenticated={setAuthenticated} />
      ) : (
        <LoginPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      )} */}
      <h2>Hello</h2>
      <Link to="/login">Login</Link> <br />
      <Link to="/signup">Sign Up</Link> <br />
      <Link to="/dashboard">dashboard</Link>
    </div>
  );
};

export default HomePage;
