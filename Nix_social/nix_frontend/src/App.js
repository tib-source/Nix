import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { render } from "react-dom";
import LoginPage from "./components/Login/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpPage from "./components/signup/SignUpPage";
import Root from "./Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../static/css/toastify.css";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Root>
      <Switch>
        <Route path="/login">
          <LoginPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup">
          <SignUpPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <ToastContainer hideProgressBar={true} newestOnTop={true} />
    </Root>
  );
};

const appDiv = document.querySelector("#main");
render(<App />, appDiv);

export default App;
