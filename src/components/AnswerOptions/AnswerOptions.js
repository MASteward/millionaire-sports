import React from 'react';
// import PropTypes from 'prop-types';
import './AnswerOptions.css';
import AnswerOption from './AnswerOption';


const AnswerOptions = (props) => {
  return (
    <div className="AnswerOptions">
      { props.answers.map((answer, index) => {
        return (
          <AnswerOption
            checkAnswer={ () => props.checkAnswer(answer)}
            answer={answer}
            key={index}
          />
        )
      })
    }
    </div>
  );
};

// AnswerOptions.propTypes = {
//
// };

export default AnswerOptions;
