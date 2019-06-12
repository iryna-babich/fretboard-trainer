import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import StartScreen from "./StartScreen";
import Select from "react-select";

it("renders without crashing", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<StartScreen />, div);
  // ReactDOM.unmountComponentAtNode(div);

  const wrapper = mount(<StartScreen />);
  wrapper.unmount();
});

it("renders correct questions number", () => {
  const wrapper = mount(<StartScreen questionsCount={10} />);
  const select = wrapper.find(Select);
  expect(select.length).toBe(1);
  select.instance().focus();
  select.simulate("keydown", { keyCode: 13 });
  wrapper.update();
});
