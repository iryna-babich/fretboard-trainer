import React from "react";

const GameScreen = props => {
  return (
    <div className="fretboard-inner">
      <div className="strings-wrapper">
        <div className="strings-wrapper--inner">{props.allStringsRender}</div>
      </div>
      <div className="defined-notes-wrapper">
        <ul className="defined-notes">{props.answerStringRender}</ul>
      </div>
      <p>Question #{props.rightGuessesArr.length + 1}</p>
    </div>
  );
};

export default GameScreen;
