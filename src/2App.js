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
    rightGuessIndex: false
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
    console.log("i:", i, "clickedNote:", octave[i]);

    if (
      octave[i] ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex]
    ) {
      this.setState({ rightGuessIndex: i });
    } else {
      this.setState(state => {
        // const updatedWrongGuessIndexes = state.wrongGuessIndexes.concat(i);
        const updatedWrongGuessIndexes = [...state.wrongGuessIndexes, i];
        return { wrongGuessIndexes: updatedWrongGuessIndexes };
      });
    }
  };

  render() {
    const allStrings = [];
    const definedNotes = [];
    const {
      randomStringIndex,
      randomNoteIndex,
      wrongGuessIndexes,
      rightGuessIndex
    } = this.state;

    for (let i = 0; i < notes.length; i++) {
      const string = [];
      for (let j = 0; j < notes[i].length; j++) {
        if (randomStringIndex === i && randomNoteIndex === j) {
          string.push(
            <li className="string-item is-highlighted" key={`${i}-${j}`}>
              <button>{notes[i][j]}</button>
            </li>
          );

          // Render in console highlighted button value.
          console.log("is-highlighted:", notes[i][j]);
        } else {
          string.push(
            <li className="string-item" key={`${i}-${j}`}>
              <button>{notes[i][j]}</button>
            </li>
          );
        }
      }

      allStrings.push(
        <ul className="string" key={i}>
          {string}
        </ul>
      );
    }

    for (let i = 0; i < octave.length; i++) {
      let buttonClasses = "";
      const wrongGuess = wrongGuessIndexes.indexOf(i) >= 0;
      const rightGuess = rightGuessIndex === i;

      if (wrongGuess) {
        buttonClasses = "is-wrong";
      } else if (rightGuess) {
        buttonClasses = "is-correct";
      }

      definedNotes.push(
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
        <ul className="defined-notes">{definedNotes}</ul>
      </div>
    );
  }
}

export default App;
