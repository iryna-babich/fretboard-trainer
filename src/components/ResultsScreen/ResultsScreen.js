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
  const averageDuration = duration / questionsCount;
  const averageDurationSeconds = (averageDuration % 60).toFixed(2);

  let timeInMinutes = "minutes";
  if (durationMinutes === 1) {
    timeInMinutes = "minute";
  }

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
          {durationMinutes > 0 && (
            <span className="duration-minutes">
              {durationMinutes} {timeInMinutes}{" "}
            </span>
          )}
          {durationSeconds} seconds
        </strong>
      </p>

      <p>
        Average time per note: <strong>{averageDurationSeconds} seconds</strong>
      </p>
      <button className="restart-button" onClick={onGameRestarted}>
        Restart
      </button>
    </div>
  );
};

ResultScreen.propTypes = {
  totalWrongGuessesCount: PropTypes.number,
  onGameRestarted: PropTypes.func,
  questionsCount: PropTypes.number,
  duration: PropTypes.number
};

ResultScreen.defaultProps = {
  onGameRestarted: () => {},
  totalWrongGuessesCount: 0,
  questionsCount: 0,
  duration: 0
};

export default ResultScreen;
