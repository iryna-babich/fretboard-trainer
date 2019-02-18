import React, { Component } from "react";

import "./StartScreen.scss";

class StartScreen extends Component {
  state = {
    questionsNumber: 10
  };

  handleNumberOfQuestions = e => {
    this.setState({
      questionsNumber: parseInt(e.target.value, 10)
    });
  };

  render() {
    const { onStartGameClick } = this.props;
    const { questionsNumber } = this.state;
    console.log("questionsNumber:", this.state.questionsNumber);
    console.log(typeof this.state.questionsNumber);

    return (
      <div className="startscreen-wrapper">
        <h1 className="header-main">Fretboard Trainer App</h1>

        <div className="strings-overlay">
          <div className="question-options">
            <label htmlFor="questions-dropdown">
              Select number of questions:
            </label>
            <select
              id="questions-dropdown"
              onChange={this.handleNumberOfQuestions}
              value={questionsNumber}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <button
            className="start-button"
            onClick={() => onStartGameClick(questionsNumber)}
          >
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default StartScreen;
