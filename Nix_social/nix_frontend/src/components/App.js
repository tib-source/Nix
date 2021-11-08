import React, { useEffect, useState } from "react";
import HomePage from "./HomePage/HomePage";
import { render } from "react-dom";
import LoginPage from "./Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./signup/SignUpPage";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {}, []);
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

const appDiv = document.querySelector("#main");
render(<App />, appDiv);

export default App;
