import React from "react";

const StartScreen = props => {
  const { onStartGameClick } = props;
  return (
    <div className="strings-overlay">
      <button className="start-button" onClick={onStartGameClick}>
        Start!
      </button>
    </div>
  );
};

export default StartScreen;
