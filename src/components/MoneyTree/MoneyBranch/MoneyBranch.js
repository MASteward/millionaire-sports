import React from 'react';
// import PropTypes from 'prop-types';
import './MoneyBranch.css';


const MoneyBranch = (props) => (
  <div className="MoneyBranch">
    <div className={`MoneyBranch__amount ${props.status}`}>{props.amount}</div>
  </div>
);

// MoneyBranch.propTypes = {
//
// };

export default MoneyBranch;
