import React from "react";
import ReactDOM from "react-dom";
import StartScreen from "./StartScreen";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StartScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
