import React from "react";
import PropTypes from "prop-types";

import "./ResultsScreen.scss";

const ResultScreen = props => {
  const {
    totalWrongGuessesCount,
    onGameRestarted,
    questionsCount,
    duration
  } = props;

  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = (duration % 60).toFixed(1);

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
      <p>
        Total time:{" "}
        <strong>
          {durationMinutes > 0 && `${durationMinutes} minutes `}
          {durationSeconds} seconds
        </strong>
      </p>
      <button className="restart-button" onClick={onGameRestarted}>
        Restart
      </button>
    </div>
  );
};

ResultScreen.propTypes = {
  totalWrongGuessesCount: PropTypes.number.isRequired,
  onGameRestarted: PropTypes.func,
  questionsCount: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
};

ResultScreen.defaultProps = {
  onGameRestarted: () => {}
};

export default ResultScreen;
