import React, { Component } from "react";
import "./App.css";

const notes = [
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
  ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
  ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"],
  ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#"],
  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"],
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]
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

class App extends Component {
  state = {
    screen: 1,
    randomStringIndex: null,
    randomNoteIndex: null,
    wrongGuesses: [],
    rightGuess: "",
    rightGuessesArr: []
  };

  highlightRandomNote = () => {
    this.setState({
      randomStringIndex: Math.floor(Math.random() * notes.length),
      randomNoteIndex: Math.floor(Math.random() * notes[0].length),
      screen: 2
    });
  };

  handleNoteClick = i => {
    let wrongGuessesCount = this.state.wrongGuesses.length;
    if (
      octave[i] ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex]
    ) {
      this.setState({ rightGuess: octave[i] });
    } else {
      this.setState(state => {
        const updatedWrongGuesses = [...state.wrongGuesses, octave[i]];
        wrongGuessesCount = updatedWrongGuesses.length;

        if (wrongGuessesCount > 4) {
          return { wrongGuesses: updatedWrongGuesses, screen: 3 };
        } else {
          return { wrongGuesses: updatedWrongGuesses };
        }
      });
    }
  };

  render() {
    const allStrings = [];
    const answerString = [];
    const {
      screen,
      randomStringIndex,
      randomNoteIndex,
      wrongGuesses,
      rightGuess
    } = this.state;

    const stringsOverlay = (
      <div className="strings-overlay">
        <button className="start-button" onClick={this.highlightRandomNote}>
          Start!
        </button>
      </div>
    );

    // Render guitar strings.
    for (let i = 0; i < notes.length; i++) {
      const stringToRender = [];
      let stringButtonClasses = "";
      for (let j = 0; j < notes[i].length; j++) {
        // Highlight randomly picked note.
        if (i === randomStringIndex && j === randomNoteIndex) {
          stringButtonClasses = "string-item is-highlighted";
          console.log("highlighted:", notes[i][j]);
        } else {
          stringButtonClasses = "string-item";
        }
        stringToRender.push(
          <li className={stringButtonClasses} key={`${i}-${j}`}>
            <button>{notes[i][j]}</button>
          </li>
        );
      }

      allStrings.push(
        <ul className="string" key={i}>
          {stringToRender}
        </ul>
      );
    }

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

    console.log("latest wrongGuesses:", this.state.wrongGuesses);

    // Render screen.
    if (screen === 1) {
      return <div className="App">{stringsOverlay}</div>;
    }
    if (screen === 2) {
      return (
        <div className="App">
          <div className="strings-wrapper">{allStrings}</div>
          <ul className="defined-notes">{answerString}</ul>
        </div>
      );
    }
    if (screen === 3) {
      return (
        <div className="App">
          <button>Third screen</button>
        </div>
      );
    }
  }
}

export default App;
