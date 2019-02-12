import React from "react";

const ResultScreen = props => {
  const { rightGuessesArr, totalWrongGuessesCount, onGameRestarted } = props;
  const rightAnswers = rightGuessesArr.join(", ");
  return (
    <div className="results-wrapper">
      <h2>Your results:</h2>
      <p>
        Correctly guessed notes are:{" "}
        <span className="is-correct-arr">
          <strong>{rightAnswers}</strong>
        </span>
      </p>
      <p>
        Incorrectly guessed notes:
        <span className="is-wrong-count">
          <strong>{totalWrongGuessesCount}</strong>
        </span>
      </p>
      <button onClick={onGameRestarted}>Restart</button>
    </div>
  );
};

export default ResultScreen;
