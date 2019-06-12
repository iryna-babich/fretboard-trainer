import React, { Component } from "react";
import Select from "react-select";

import "./StartScreen.scss";

const options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 }
];

class StartScreen extends Component {
  state = {
    questionNumber: 10
  };

  handleNumberOfQuestions = questionOption => {
    const updatedQuestionsNumber = questionOption.value;
    this.setState({
      questionNumber: updatedQuestionsNumber
    });
  };

  render() {
    const { onStartGameClick } = this.props;
    const { questionNumber } = this.state;
    console.log("questionsNumber:", this.state.questionNumber);
    console.log(typeof this.state.questionNumber);

    return (
      <div className="startscreen-wrapper">
        <h1 className="header-main">Fretboard Trainer</h1>

        <div className="strings-overlay">
          <div className="question-options">
            <label htmlFor="questions-dropdown">
              Select number of questions:
            </label>
            <Select
              id="questions-dropdown"
              onChange={this.handleNumberOfQuestions}
              options={options}
              value={questionNumber}
              placeholder={questionNumber}
            />
          </div>
          <button
            className="start-button"
            onClick={() => onStartGameClick(questionNumber)}
          >
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default StartScreen;
