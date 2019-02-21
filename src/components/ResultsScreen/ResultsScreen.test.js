import React from "react";
import { mount } from "enzyme";
import ResultsScreen from "./ResultsScreen";

it("renders without crashing", () => {
  const wrapper = mount(
    <ResultsScreen totalWrongGuessesCount={0} questionsCount={0} duration={0} />
  );
  wrapper.unmount();
});

it("renders correct totalWrongGuessesCount with no wrong guesses", () => {
  const wrapper = mount(
    <ResultsScreen totalWrongGuessesCount={0} questionsCount={0} duration={0} />
  );
  expect(wrapper.find(".is-wrong-count").text()).toBe("0");
});

it("renders correct totalWrongGuessesCount with wrong guesses > 0", () => {
  const wrongGuesses = 10;
  const wrapper = mount(
    <ResultsScreen
      totalWrongGuessesCount={wrongGuesses}
      questionsCount={0}
      duration={0}
    />
  );
  expect(wrapper.find(".is-wrong-count").text()).toBe(`${wrongGuesses}`);
});