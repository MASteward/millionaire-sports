import React from 'react';
// import PropTypes from 'prop-types';
import './AnswerOption.css';


const AnswerOption = (props) => {
  return (
    <div className="AnswerOption">
      <button onClick={props.checkAnswer.bind(this, props.answer)}>{props.answer}</button>
    </div>
  );
}

// AnswerOption.propTypes = {
//
// };
export default AnswerOption;
