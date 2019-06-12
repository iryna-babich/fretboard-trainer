import React, { Component } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import ResultsScreen from "./components/ResultsScreen/ResultsScreen";
import GameScreen from "./components/GameScreen/GameScreen";
import "./App.scss";

class App extends Component {
  state = {
    screen: 1,
    totalWrongGuessesCount: null,
    rightGuessesArr: [],
    questionsCount: null,
    duration: null
  };

  handleStartGameClick = num => {
    this.setState({
      screen: 2,
      questionsCount: num
    });
  };

  handleGameCompleted = (
    rightGuessesArrParam,
    totalWrongGuessesCountParam,
    duration
  ) => {
    this.setState({
      screen: 3,
      rightGuessesArr: rightGuessesArrParam,
      totalWrongGuessesCount: totalWrongGuessesCountParam,
      duration: duration
    });
  };

  startGameHandler = () => {
    this.setState({
      screen: 2
    });
    this.assignNoteToGuess();
  };

  restartClickHandler = () => {
    this.setState({
      screen: 2
    });
  };

  render() {
    const {
      screen,
      totalWrongGuessesCount,
      questionsCount,
      duration
    } = this.state;

    // Render screen.
    if (screen === 1) {
      return (
        <div className="App">
          <StartScreen
            onStartGameClick={this.handleStartGameClick}
            questionsCount={questionsCount}
          />
        </div>
      );
    }
    if (screen === 2) {
      return (
        <div className="App">
          <GameScreen
            questionsCount={questionsCount}
            onGameCompleted={this.handleGameCompleted}
          />
        </div>
      );
    }
    if (screen === 3) {
      return (
        <div className="App">
          <ResultsScreen
            questionsCount={questionsCount}
            onGameRestarted={this.restartClickHandler}
            totalWrongGuessesCount={totalWrongGuessesCount}
            duration={duration}
          />
        </div>
      );
    }
  }
}

export default App;
