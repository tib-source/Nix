import React from "react";
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
    </div>
  );
};

export default HomePage;
