import React, { Component } from 'react';
import './App.css';
// import Question from './components/Question/Question';
import gameQuestions from './api/gameQuestions';
import Start from './layout/Start';
// import AnswerOptions from './components/AnswerOptions';
// import MoneyTree from './components/MoneyTree';
// import Lifelines from './components/Lifelines/Lifelines';
import Game from './layout/Game';

class App extends Component {
  state = {
    level: 0,
    questions: [],
    currentQuestion: "",
    answers: [],
    correct: "",
    winnings: ["$100", "$200", "$300", "$500", "$1,000", "$2,000","$4,000","$8,000", "$16,000", "$32,000", "$64,000", "$100,000", "$250,000", "$500,000", "$1,000,000"],
    start: false
  }


  componentDidMount() {
    this.onStart();
  }

  onStart() {
    const theQuestions = this.shuffleQuestions();
    this.setState({
      questions: theQuestions
    });
  }

  loadGame() {
    let questionObject = this.state.questions[this.state.level];
    let question = questionObject.question;
    let answerArray = questionObject.answer_options;
    let answers = this.shuffleArray(answerArray);
    let correctAnswer = questionObject.correct_answer;
    this.setState({
      currentQuestion: question,
      answers: answers,
      correct: correctAnswer
    });
  }

  checkAnswerHandler = value => {
    if (value === this.state.correct) {
      let upLevel = this.state.level;
      upLevel++;
      this.setState({
        level: upLevel
      }, () => { this.loadGame() });
    } else {
      console.log("Wrong");
    }
  }



  shuffleQuestions() {
    let basicArray = this.shuffleArray(gameQuestions.basic);
    let advancedArray = this.shuffleArray(gameQuestions.advanced);
    let expertArray = this.shuffleArray(gameQuestions.expert);
    let allArray = [basicArray, advancedArray, expertArray];
    let gameArray = [];
    allArray.forEach((array, index) => {
      for (var i = 0; i < 5; i++) {
        gameArray.push(array[i]);
      }
    });
    console.log("playArray", gameArray);
    return gameArray;
  }



  shuffleArray(array) {
    console.log("Before shuffleArray", array);
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    console.log("shuffleArray Array", array);
    return array;
  }

  beginGame = (start) => {
    this.setState({
      start: start
    });
    this.loadGame();
  }



  render() {
    return (
      <div className="App">
        {this.state.start ? <Game
          data={this.state}
          checkAnswer={this.checkAnswerHandler}
        /> : <Start beginGame={ this.beginGame } />}
      </div>
    );
  }
}

export default App;
