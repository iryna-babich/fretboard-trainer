import React from "react";

const StartScreen = props => {
  return (
    <div className="strings-overlay">
      <button className="start-button" onClick={props.startTheGame}>
        Start!
      </button>
    </div>
  );
};

export default StartScreen;
