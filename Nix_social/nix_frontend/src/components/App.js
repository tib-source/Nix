import React from "react";
import Homepage from "./Homepage";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h2>Hello</h2>
      <Homepage />
    </div>
  );
};

const appDiv = document.querySelector("#main");
render(<App />, appDiv);

export default App;
