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
    randomStringIndex: null,
    randomNoteIndex: null,
    wrongGuesses: [],
    correctGuess: ""
  };

  highlightRandomNote = () => {
    this.setState({
      randomStringIndex: Math.floor(Math.random() * notes.length),
      randomNoteIndex: Math.floor(Math.random() * notes[0].length)
    });
  };

  componentDidMount() {
    this.highlightRandomNote();
  }

  handleNoteClick = i => {
    if (
      octave[i] ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex]
    ) {
      this.setState({ correctGuess: octave[i] });
    } else {
      this.setState(state => {
        const updatedWrongGuesses = [...state.wrongGuesses, octave[i]];
        console.log("updatedWrongGuesses:", updatedWrongGuesses);
        return { wrongGuesses: updatedWrongGuesses };
      });
    }
  };

  render() {
    const allStrings = [];
    const answersString = [];
    const {
      randomStringIndex,
      randomNoteIndex,
      wrongGuesses,
      correctGuess
    } = this.state;

    for (let i = 0; i < notes.length; i++) {
      const stringToRender = [];

      for (let j = 0; j < notes[i].length; j++) {
        if (i === randomStringIndex && j === randomNoteIndex) {
          stringToRender.push(
            <li className="string-item is-highlighted" key={`${i}-${j}`}>
              <button>{notes[i][j]}</button>
            </li>
          );

          console.log("highlighted:", notes[i][j]);
        } else {
          stringToRender.push(
            <li className="string-item" key={`${i}-${j}`}>
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

    for (let i = 0; i < octave.length; i++) {
      let buttonClasses = "";
      // const isWrongGuess = wrongGuesses.indexOf(octave[i]) >= 0;
      const isWrongGuess = wrongGuesses.includes(octave[i]);
      const isCorrectGuess = correctGuess === octave[i];

      if (isWrongGuess) {
        buttonClasses = "is-wrong";
      } else if (isCorrectGuess) {
        buttonClasses = "is-correct";
      }
      answersString.push(
        <li key={i}>
          <button
            className={buttonClasses}
            onClick={() => this.handleNoteClick(i)}
          >
            {octave[i]}
          </button>
        </li>
      );
    }

    return (
      <div className="App">
        <div className="strings-wrapper">{allStrings}</div>
        <ul className="defined-notes">{answersString}</ul>
      </div>
    );
  }
}

export default App;
