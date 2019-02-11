import React, { Component } from "react";
import Tone from "tone";

const notes = [
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"],
  ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#"],
  ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"],
  ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
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

const setRightAnswersCount = 5;

class GameScreen extends Component {
  static getRandomStringIndex() {
    return Math.floor(Math.random() * notes.length);
  }

  static getRandomNoteIndex() {
    return Math.floor(Math.random() * notes[0].length);
  }

  state = {
    randomStringIndex: null,
    randomNoteIndex: null,
    wrongGuesses: [],
    totalWrongGuessesCount: 0,
    rightGuess: "",
    rightGuessesArr: []
  };

  assignNoteToGuess = () => {
    const randomStringIndex = GameScreen.getRandomStringIndex();
    const randomNoteIndex = GameScreen.getRandomNoteIndex();

    this.playTheNote(notes[randomStringIndex][randomNoteIndex]);
    this.setState({
      randomStringIndex: randomStringIndex,
      randomNoteIndex: randomNoteIndex
    });
  };

  componentDidMount() {
    this.assignNoteToGuess();
  }

  playTheNote = note => {
    var synth = new Tone.Synth().toMaster();

    // Play the note for the duration of an 8th note.
    synth.triggerAttackRelease(`${note}4`, "8n");
  };

  handleNoteClick = i => {
    const isCorrectNote =
      octave[i] ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex];

    this.playTheNote(octave[i]);
    // let wrongGuessesCount = this.state.wrongGuesses.length;
    if (isCorrectNote) {
      // If it's a correct guess, updating state, adding correct answer to the rightGuessesArr.
      this.setState(state => {
        const updatedrightGuessesArr = [...state.rightGuessesArr, octave[i]];
        const resetWrongGuesses = [];
        const rightGuessesCount = updatedrightGuessesArr.length;

        // Hightlight next random note after we guessed the correct note if rightGuessArr is less than setRightAnswersCount.
        if (rightGuessesCount < setRightAnswersCount) {
          const randomStringIndex = GameScreen.getRandomStringIndex();
          const randomNoteIndex = GameScreen.getRandomNoteIndex();

          this.playTheNote(notes[randomStringIndex][randomNoteIndex]);

          return {
            wrongGuesses: resetWrongGuesses,
            rightGuessesArr: updatedrightGuessesArr,
            randomStringIndex: randomStringIndex,
            randomNoteIndex: randomNoteIndex
          };
        } else {
          return {
            screen: 3,
            rightGuessesArr: updatedrightGuessesArr
          };
        }
      });
    } else {
      this.setState(state => {
        const updatedWrongGuesses = [...state.wrongGuesses, octave[i]];
        const updatedtotalWrongGuessesCount = state.totalWrongGuessesCount + 1;
        return {
          wrongGuesses: updatedWrongGuesses,
          totalWrongGuessesCount: updatedtotalWrongGuessesCount
        };
      });
    }
  };

  render() {
    const allStrings = [];
    const answerString = [];
    const {
      randomStringIndex,
      randomNoteIndex,
      wrongGuesses,
      totalWrongGuessesCount,
      rightGuess,
      rightGuessesArr
    } = this.state;

    // Render guitar strings.
    for (let i = 0; i < notes.length; i++) {
      const stringToRender = [];
      let stringButtonClasses = "";
      for (let j = 0; j < notes[i].length; j++) {
        // Highlight randomly picked note.
        if (i === randomStringIndex && j === randomNoteIndex) {
          // this.playTheNote(notes[i][j]);
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

    let rightGuessedNotes = rightGuessesArr.join(", ");

    console.log("latest wrongGuesses:", this.state.wrongGuesses);
    console.log("total wrong guesses count:", totalWrongGuessesCount);
    console.log(
      "latest rightGuesses:",
      this.state.rightGuessesArr,
      this.state.rightGuessesArr.length
    );

    return (
      <div className="fretboard-inner">
        <div className="strings-wrapper">
          <div className="strings-wrapper--inner">{allStrings}</div>
        </div>
        <div className="defined-notes-wrapper">
          <ul className="defined-notes">{answerString}</ul>
        </div>
        <p>Question #{rightGuessesArr.length + 1}</p>
      </div>
    );
  }
}

// const GameScreen = props => {
//   return (
//     <div className="fretboard-inner">
//       <div className="strings-wrapper">
//         <div className="strings-wrapper--inner">{props.allStringsRender}</div>
//       </div>
//       <div className="defined-notes-wrapper">
//         <ul className="defined-notes">{props.answerStringRender}</ul>
//       </div>
//       <p>Question #{props.rightGuessesArr.length + 1}</p>
//     </div>
//   );
// };

export default GameScreen;
