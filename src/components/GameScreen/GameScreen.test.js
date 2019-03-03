import React from "react";
import { mount } from "enzyme";
import GameScreen from "./GameScreen";

jest.mock("tone", () => {
  return {
    Synth: jest.fn().mockImplementation(() => ({
      toMaster: () => ({
        triggerAttackRelease: jest.fn()
      })
    }))
  };
});

describe("question button", () => {
  it("is visible when GameScreen mounted", () => {
    const wrapper = mount(<GameScreen questionsCount={1} />);
    const questionButton = wrapper.find(".string-item.is-highlighted");
    expect(questionButton.length).toBe(1);
  });

  it("plays note when clicked", () => {
    const wrapper = mount(<GameScreen questionsCount={1} />);
    const noteSpy = wrapper.instance().synth.triggerAttackRelease;
    const questionButton = wrapper.find(".string-item.is-highlighted");
    noteSpy.mockClear();
    questionButton.simulate("click");
    expect(noteSpy).not.toHaveBeenCalled();
  });

  it("plays the highlighted note again when clicked", () => {
    const wrapper = mount(<GameScreen questionsCount={5} />);
    const noteSpy = wrapper.instance().synth.triggerAttackRelease;

    wrapper.setState({
      randomStringIndex: 0,
      randomNoteIndex: 0
    });

    const questionButton = wrapper.find(".string-item.is-highlighted button");
    expect(questionButton.text()).toBe("E");

    noteSpy.mockClear();
    questionButton.simulate("click");
    expect(noteSpy).toHaveBeenCalledWith("E4", "16n");
  });

  it("plays the A#2 when clicked 4 string 1 fret", () => {
    const wrapper = mount(<GameScreen questionsCount={5} />);
    const noteSpy = wrapper.instance().synth.triggerAttackRelease;

    wrapper.setState({
      randomStringIndex: 4,
      randomNoteIndex: 1
    });

    const questionButton = wrapper.find(".string-item.is-highlighted button");

    noteSpy.mockClear();
    questionButton.simulate("click");
    expect(noteSpy).toHaveBeenCalledWith("A#2", "16n");
  });
});
