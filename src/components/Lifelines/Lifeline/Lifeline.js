import React from 'react';
// import PropTypes from 'prop-types';
import './Lifeline.css';


export default function Lifeline(props) {
  console.log("props", props);
  return (
    <div className="Lifeline__button-container">
      <button className="Lifeline__button" disabled={props.status} onClick={() => props.clicked(props.id)}>{props.name}</button>
    </div>
  );
}

// Lifeline.propTypes = {
//
// };
