import React, { Component } from "react";
import StartScreen from "./components/StartScreen";
import ResultScreen from "./components/ResultsScreen";
import GameScreen from "./components/GameScreen";
import "./App.css";

const questionsCount = 5;

class App extends Component {
  state = {
    screen: 1,
    totalWrongGuessesCount: null,
    rightGuessesArr: []
  };

  handleStartGameClick = () => {
    this.setState({
      screen: 2
    });
  };

  handleGameCompleted = (rightGuessesArrParam, totalWrongGuessesCountParam) => {
    this.setState({
      screen: 3,
      rightGuessesArr: rightGuessesArrParam,
      totalWrongGuessesCount: totalWrongGuessesCountParam
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
    const { screen, totalWrongGuessesCount, rightGuessesArr } = this.state;

    // Render screen.
    if (screen === 1) {
      return (
        <div className="App">
          <StartScreen onStartGameClick={this.handleStartGameClick} />
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
          <ResultScreen
            onGameRestarted={this.restartClickHandler}
            totalWrongGuessesCount={totalWrongGuessesCount}
            rightGuessesArr={rightGuessesArr}
          />
        </div>
      );
    }
  }
}

export default App;
