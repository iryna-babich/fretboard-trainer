import React from "react";
import { mount } from "enzyme";
import ResultsScreen from "./ResultsScreen";

it("renders without crashing", () => {
  const wrapper = mount(<ResultsScreen />);
  wrapper.unmount();
});

it("renders correct totalWrongGuessesCount with no wrong guesses", () => {
  const wrapper = mount(<ResultsScreen totalWrongGuessesCount={0} />);
  expect(wrapper.find(".is-wrong-count").text()).toBe("0");
});

it("renders correct totalWrongGuessesCount with wrong guesses > 0", () => {
  const wrongGuesses = 10;
  const wrapper = mount(
    <ResultsScreen totalWrongGuessesCount={wrongGuesses} />
  );
  expect(wrapper.find(".is-wrong-count").text()).toBe(`${wrongGuesses}`);
});

it("renders no minutes when duration of the game less than a minute", () => {
  const wrapper = mount(<ResultsScreen duration={10} />);
  expect(wrapper.find(".duration-minutes").length).toBe(0);
});

it("renders minutes in singular form when duration of the game one minute", () => {
  const wrapper = mount(<ResultsScreen duration={70} />);
  expect(wrapper.find(".duration-minutes").text()).toBe("1 minute");
});

it("renders minutes in plural form when duration of the game more than one minute", () => {
  const wrapper = mount(<ResultsScreen duration={130} />);
  expect(wrapper.find(".duration-minutes").text()).toBe("2 minutes");
});
