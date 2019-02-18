import React from "react";

import "./ResultsScreen.scss";

const ResultScreen = props => {
  const { totalWrongGuessesCount, onGameRestarted, questionsCount } = props;
  return (
    <div className="results-wrapper">
      <h2>Your results:</h2>
      <p>Number of questions: {questionsCount}</p>
      <p>
        Number of mistakes:{" "}
        <span className="is-wrong-count">
          <strong>{totalWrongGuessesCount}</strong>
        </span>
      </p>
      <button className="restart-button" onClick={onGameRestarted}>
        Restart
      </button>
    </div>
  );
};

export default ResultScreen;
