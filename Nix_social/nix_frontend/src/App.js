import React, { useEffect, useState } from "react";
import HomePage from "./container/HomePage/HomePage";
import { render } from "react-dom";
import LoginPage from "./container/Login/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpPage from "./container/signup/SignUpPage";
import Root from "./Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../static/css/toastify.css";
import Dashboard from "./contianer/Dashboard/Dashboard";
import requireAuth from "./components/Utils/RequireAuth";
const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Root>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        {/* <Route path="/dashboard" component={requireAuth(Dashboard)} /> */}
        <Route path="/dashboard" component={Dashboard} />
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
