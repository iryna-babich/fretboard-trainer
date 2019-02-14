import React, { Component } from "react";

class StartScreen extends Component {
  state = {
    questionsNumber: 10
  };

  handleNumberOfQuestions = e => {
    this.setState({
      questionsNumber: e.target.value
    });
  };

  render() {
    const { onStartGameClick } = this.props;
    const { questionsNumber } = this.state;
    console.log("questionsNumber:", this.state.questionsNumber);

    return (
      <div className="strings-overlay">
        <div className="question-options">
          <h2>Select number of questions in quiz</h2>
          <select
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
          Start!
        </button>
      </div>
    );
  }
}

export default StartScreen;
