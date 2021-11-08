import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { render } from "react-dom";
import { Router } from "react-router";
import { history } from "./Reducer";
const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const appDiv = document.querySelector("#main");
render(<Index />, appDiv);

export default index;
