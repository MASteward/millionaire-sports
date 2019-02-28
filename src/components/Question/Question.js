import React from 'react';
import './Question.css';

const Question = (props) => (
  <div className="Question">
    <div className="Question__container">
      <h1>{props.question}</h1>
    </div>
  </div>
);

export default Question;
