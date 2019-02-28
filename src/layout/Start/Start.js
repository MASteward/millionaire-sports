import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../images/whoWantsSportsEdition.png';
import "./Start.css";


const Start = (props) => {
  return (
    <div className="Start" >
      <img src={logo} className="Start__logo" alt="Game Logo"/>
      <div className="Start__button-container">
        <button onClick={ props.beginGame.bind(this, true) }>Start</button>
      </div>
    </div>
  );
}

export default Start;
