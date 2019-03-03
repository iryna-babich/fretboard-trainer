import React, { Component } from "react";
import PropTypes from "prop-types";
import Tone from "tone";

import "./GameScreen.scss";

const notes = [
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
  ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
  ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"]
];

const octaveIndexArr = [
  [4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
  [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]
];

const octave = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

const verticalStr = 12;

class GameScreen extends Component {
  static getRandomStringIndex() {
    return Math.floor(Math.random() * notes.length);
  }

  static getRandomNoteIndex() {
    return Math.floor(Math.random() * notes[0].length);
  }

  constructor(props) {
    super(props);
    this.synth = null;
  }

  state = {
    randomStringIndex: null,
    randomNoteIndex: null,
    wrongGuesses: [],
    totalWrongGuessesCount: 0,
    rightGuess: "",
    rightGuessesArr: [],
    startTime: null
  };

  assignNoteToGuess = () => {
    const randomStringIndex = GameScreen.getRandomStringIndex();
    const randomNoteIndex = GameScreen.getRandomNoteIndex();

    this.playPositionAtStringAndFret(randomStringIndex, randomNoteIndex);
    this.setState({
      randomStringIndex: randomStringIndex,
      randomNoteIndex: randomNoteIndex
    });
  };

  setStartTime = () => {
    this.setState({
      startTime: Date.now()
    });
  };

  componentDidMount() {
    this.synth = new Tone.Synth().toMaster();
    this.assignNoteToGuess();
    this.setStartTime();
  }

  playNote(note) {
    this.synth.triggerAttackRelease(note, "16n");
  }

  playPositionAtStringAndFret = (i, j) => {
    const note = notes[i][j];
    const octave = octaveIndexArr[i][j];
    console.log("octave:", octave);
    this.playNote(`${note}${octave}`);
  };

  correctlyGuessedNote = i => {
    const { onGameCompleted, questionsCount } = this.props;

    const startTime = this.state.startTime;
    // Duration in seconds.
    const duration = (Date.now() - startTime) / 1000;

    this.setState(state => {
      const updatedrightGuessesArr = [...state.rightGuessesArr, octave[i]];
      const resetWrongGuesses = [];
      const rightGuessesCount = updatedrightGuessesArr.length;

      // Hightlight next random note after we guessed the correct note if rightGuessArr is less than questionsCount.
      if (rightGuessesCount < questionsCount) {
        const randomStringIndex = GameScreen.getRandomStringIndex();
        const randomNoteIndex = GameScreen.getRandomNoteIndex();

        this.playPositionAtStringAndFret(randomStringIndex, randomNoteIndex);

        return {
          wrongGuesses: resetWrongGuesses,
          rightGuessesArr: updatedrightGuessesArr,
          randomStringIndex: randomStringIndex,
          randomNoteIndex: randomNoteIndex
        };
      } else {
        // Notify App.
        onGameCompleted(
          updatedrightGuessesArr,
          state.totalWrongGuessesCount,
          duration
        );

        return {
          rightGuessesArr: updatedrightGuessesArr
        };
      }
    });
  };

  wronglyGuessedNote = i => {
    this.setState(state => {
      const updatedWrongGuesses = [...state.wrongGuesses, octave[i]];
      const updatedtotalWrongGuessesCount = state.totalWrongGuessesCount + 1;
      return {
        wrongGuesses: updatedWrongGuesses,
        totalWrongGuessesCount: updatedtotalWrongGuessesCount
      };
    });
  };

  handleNoteClick = i => {
    const isCorrectNote =
      octave[i] ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex];

    if (isCorrectNote) {
      this.correctlyGuessedNote(i);

      // If it's a correct guess, updating state, adding correct answer to the rightGuessesArr.
    } else {
      this.wronglyGuessedNote(i);
    }
  };

  render() {
    const allStrings = [];
    const answerString = [];
    const verticalStrArr = [];
    const markerDotsArr = [];
    const {
      randomStringIndex,
      randomNoteIndex,
      wrongGuesses,
      totalWrongGuessesCount,
      rightGuess,
      rightGuessesArr
    } = this.state;

    const { questionsCount } = this.props;

    // Render guitar strings.
    for (let i = 0; i < notes.length; i++) {
      const stringToRender = [];
      let stringButtonClasses = "";
      for (let j = 0; j < notes[i].length; j++) {
        // Highlight randomly picked note.
        if (i === randomStringIndex && j === randomNoteIndex) {
          stringButtonClasses = "string-item is-highlighted";
          console.log("highlighted:", notes[i][j]);
          stringToRender.push(
            <li className={stringButtonClasses} key={`${i}-${j}`}>
              <button onClick={() => this.playPositionAtStringAndFret(i, j)}>
                {notes[i][j]}
              </button>
            </li>
          );
        } else {
          stringButtonClasses = "string-item";
          stringToRender.push(
            <li className={stringButtonClasses} key={`${i}-${j}`}>
              <button>{notes[i][j]}</button>
            </li>
          );
        }
      }

      allStrings.push(
        <ul className="string" key={i}>
          {stringToRender}
        </ul>
      );
    }

    // Render answer string.
    for (let i = 0; i < octave.length; i++) {
      let buttonClasses = "";
      const isWrongGuesses = wrongGuesses.includes(octave[i]);
      const isRightGuess = rightGuess === octave[i];

      if (isWrongGuesses) {
        buttonClasses = "is-wrong";
      } else if (isRightGuess) {
        buttonClasses = "is-correct";
      }

      answerString.push(
        <li key={i}>
          <button
            onClick={() => this.handleNoteClick(i)}
            className={buttonClasses}
          >
            {octave[i]}
          </button>
        </li>
      );
    }

    // Render vertical stripes.
    for (let i = 0; i < verticalStr; i++) {
      verticalStrArr.push(<div className="vertical-stripe" key={i} />);
    }

    // Render marker dots.
    for (let i = 0; i < verticalStr; i++) {
      markerDotsArr.push(<div className="marker-dot" key={i} />);
    }

    console.log("total wrong guesses count:", totalWrongGuessesCount);
    console.log("latest rightGuesses:", this.state.rightGuessesArr);

    return (
      <div className="fretboard-inner">
        <div className="strings-wrapper">
          <div className="strings-wrapper--inner">
            <div className="vertical-stripes">{verticalStrArr}</div>
            <div className="marker-dots">{markerDotsArr}</div>
            <div className="strings">{allStrings}</div>
          </div>
        </div>
        <div className="defined-notes-wrapper">
          <ul className="defined-notes">{answerString}</ul>
        </div>
        <p>
          Question {rightGuessesArr.length + 1} of {questionsCount}
        </p>
      </div>
    );
  }
}

GameScreen.propTypes = {
  questionsCount: PropTypes.number.isRequired
};

export default GameScreen;
