import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { render } from "react-dom";
import LoginPage from "./components/Login/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpPage from "./components/signup/SignUpPage";
import Root from "./Root";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Root>
      <Switch>
        {console.log("ITS WORKING")}
        <Route
          path="/login"
          element={
            <LoginPage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpPage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          }
        />
        <Route exact path="/" element={<HomePage />} />
      </Switch>
    </Root>
  );
};

const appDiv = document.querySelector("#main");
render(<App />, appDiv);

export default App;
