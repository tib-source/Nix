import React, { useEffect, useState } from "react";
import HomePage from "./containers/HomePage/HomePage";
import { render } from "react-dom";
import LoginPage from "./containers/Login/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpPage from "./containers/signup/SignUpPage";
import Root from "./Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../static/css/toastify.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import requireAuth from "./components/Utils/RequireAuth";
import { getToken } from "./components/Utils/Utils";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const App = (props) => {
  return (
    <Root>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
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

const mapStateToProps = (state) => {
  return state;
};

export default App;
