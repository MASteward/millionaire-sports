import React from 'react';
// import PropTypes from 'prop-types';
import './Game.css';
import MoneyTree from '../../components/MoneyTree';
import Lifelines from '../../components/Lifelines';
import Question from '../../components/Question';
import AnswerOptions from '../../components/AnswerOptions';


const Game = (props) => {
  return (
    <div className='game__container'>
      <div className="game__status-container">
        <MoneyTree
          level={props.data.level}
          winnings={props.data.winnings}
        />
        <Lifelines />

      </div>
      <div className="game__question">
        <Question
          question={props.data.currentQuestion}
        />
        <AnswerOptions
          checkAnswer={props.checkAnswer}
          answers={props.data.answers} />
      </div>
    </div>
  )
};

// Game.propTypes = {
//
// };

export default Game;
