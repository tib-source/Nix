import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { render } from "react-dom";
import LoginPage from "./components/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/signup/SignUpPage";
import Store from "./store";
import { Provider, connect } from "react-redux";
import { push } from "redux-first-history";
import { Router } from "react-router-dom";
import { store, history } from "./store";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
