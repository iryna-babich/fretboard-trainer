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
    wrongGuessIndexes: [],
    rightGuessIndex: null
  };

  componentDidMount() {
    this.highlightRandomNote();
  }

  highlightRandomNote = () => {
    this.setState({
      randomStringIndex: Math.floor(Math.random() * notes.length),
      randomNoteIndex: Math.floor(Math.random() * notes[0].length)
    });
  };

  handleNoteClick = i => {
    const clickedNote = octave[i];
    console.log("clickedNote:", clickedNote);

    if (
      clickedNote ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex]
    ) {
      this.setState({ rightGuessIndex: i });
    } else {
      this.setState(state => {
        const newWrongGuessIndexes = state.wrongGuessIndexes.concat(i);
        return { wrongGuessIndexes: newWrongGuessIndexes };
      });
    }
  };

  render() {
    const allStrings = [];
    const definedNotes = [];
    // const randomStringIndex = this.state.randomStringIndex;
    // const randomNoteIndex = this.state.randomNoteIndex;
    const {
      randomStringIndex,
      randomNoteIndex,
      wrongGuessIndexes,
      rightGuessIndex
    } = this.state;

    if (randomStringIndex === null || randomNoteIndex === null) {
      console.log("Highlighted notes have not been defined yet.");
    } else {
      console.log(
        "randomStringIndex:",
        randomStringIndex,
        "randomNoteIndex",
        randomNoteIndex,
        "highlightedNote:",
        notes[randomStringIndex][randomNoteIndex]
      );
    }

    for (let i = 0; i < notes.length; i++) {
      const singleString = [];
      for (let j = 0; j < notes[i].length; j++) {
        if (i === randomStringIndex && j === randomNoteIndex) {
          singleString.push(
            <li className="string-item is-highlighted" key={`${i}-${j}`}>
              <button>{notes[i][j]}</button>
            </li>
          );
        } else {
          singleString.push(
            <li className="string-item" key={`${i}-${j}`}>
              <button>{notes[i][j]}</button>
            </li>
          );
        }
      }

      allStrings.push(
        <ul className="string" key={i}>
          {singleString}
        </ul>
      );
    }

    for (let i = 0; i < octave.length; i++) {
      const handleClick = () => {
        this.handleNoteClick(i);
      };
      const isWrongGuess = wrongGuessIndexes.indexOf(i) >= 0;
      const isCorrectGuess = rightGuessIndex === i;

      let buttonClasses = "";
      if (isWrongGuess) {
        buttonClasses = "is-wrong";
      } else if (isCorrectGuess) {
        buttonClasses = "is-correct";
      }

      definedNotes.push(
        <li key={i}>
          <button onClick={handleClick} className={buttonClasses}>
            {octave[i]}
          </button>
        </li>
      );
    }

    return (
      <div className="App">
        <div className="strings-wrapper">{allStrings}</div>
        <ul className="defined-notes">{definedNotes}</ul>
      </div>
    );
  }
}

export default App;
