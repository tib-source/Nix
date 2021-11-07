import React, { useEffect, useState } from "react";
import HomePage from "./HomePage/HomePage";
import { render } from "react-dom";
import LoginPage from './Login/LoginPage'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => { }, [])
  return (
    <Router>
      {authenticated ? <HomePage setAuthenticated={setAuthenticated} /> : <LoginPage authenticated={authenticated} setAuthenticated={setAuthenticated} />}
    </Router>
  );
};

const appDiv = document.querySelector("#main");
render(<App />, appDiv);

export default App;
