import React from "react";

const ResultScreen = props => {
  return (
    <div className="results-wrapper">
      <h2>Your results:</h2>
      <p>
        Correctly guessed notes are:{" "}
        <span className="is-correct-arr">
          <strong>{props.rightGuessedNotes}</strong>
        </span>
      </p>
      <p>
        Amount of incorrectly guessed notes:
        <span className="is-wrong-count">
          <strong>{props.totalWrongGuessesCount}</strong>
        </span>
      </p>
      <button onClick={props.restartTheGame}>Restart</button>
    </div>
  );
};

export default ResultScreen;
