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
    screens: 1,
    randomStringIndex: null,
    randomNoteIndex: null,
    wrongGuesses: [],
    rightGuess: ""
  };

  highlightRandomNote = () => {
    this.setState({
      randomStringIndex: Math.floor(Math.random() * notes.length),
      randomNoteIndex: Math.floor(Math.random() * notes[0].length),
      screens: 2
    });
  };

  // componentDidMount() {
  //   this.highlightRandomNote();
  // }

  handleNoteClick = i => {
    if (
      octave[i] ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex]
    ) {
      this.setState({ rightGuess: octave[i] });
    } else {
      this.setState(state => {
        const updatedWrongGuesses = [...state.wrongGuesses, octave[i]];
        return { wrongGuesses: updatedWrongGuesses };
      });
    }
  };

  render() {
    const allStrings = [];
    const answerString = [];
    const {
      screens,
      randomStringIndex,
      randomNoteIndex,
      wrongGuesses,
      rightGuess
    } = this.state;

    // Render overlay.
    let overlayClasses = "";

    if (screens === 1) {
      overlayClasses = "strings-overlay";
    } else if (screens === 2) {
      overlayClasses = "strings-overlay is-hidden";

      // Render guitar strings when the game is started.
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
    }

    const stringsOverlay = (
      <div className={overlayClasses}>
        <button className="start-button" onClick={this.highlightRandomNote}>
          Start!
        </button>
      </div>
    );

    // // Render guitar strings.
    // for (let i = 0; i < notes.length; i++) {
    //   const stringToRender = [];
    //   let stringButtonClasses = "";
    //   for (let j = 0; j < notes[i].length; j++) {
    //     // Highlight randomly picked note.
    //     if (i === randomStringIndex && j === randomNoteIndex) {
    //       stringButtonClasses = "string-item is-highlighted";
    //       console.log("highlighted:", notes[i][j]);
    //     } else {
    //       stringButtonClasses = "string-item";
    //     }
    //     stringToRender.push(
    //       <li className={stringButtonClasses} key={`${i}-${j}`}>
    //         <button>{notes[i][j]}</button>
    //       </li>
    //     );
    //   }

    //   allStrings.push(
    //     <ul className="string" key={i}>
    //       {stringToRender}
    //     </ul>
    //   );
    // }

    // for (let i = 0; i < octave.length; i++) {
    //   let buttonClasses = "";
    //   const isWrongGuesses = wrongGuesses.includes(octave[i]);
    //   const isRightGuess = rightGuess === octave[i];

    //   if (isWrongGuesses) {
    //     buttonClasses = "is-wrong";
    //   } else if (isRightGuess) {
    //     buttonClasses = "is-correct";
    //   }

    //   answerString.push(
    //     <li key={i}>
    //       <button
    //         onClick={() => this.handleNoteClick(i)}
    //         className={buttonClasses}
    //       >
    //         {octave[i]}
    //       </button>
    //     </li>
    //   );
    // }

    return (
      <div className="App">
        {stringsOverlay}
        <div className="strings-wrapper">{allStrings}</div>
        <ul className="defined-notes">{answerString}</ul>
      </div>
    );
  }
}

export default App;
