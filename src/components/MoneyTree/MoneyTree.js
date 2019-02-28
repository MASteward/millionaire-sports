import React from 'react';
// import PropTypes from 'prop-types';
import './MoneyTree.css';
import MoneyBranch from './MoneyBranch/MoneyBranch';

const MoneyTree = (props) => {
  let branches=[];
  if (props.level === 0) {
    branches = [props.level + 1, props.level];
  } else if (props === 14) {
    branches = [props.level - 1, props.level];
  } else {
    branches = [props.level + 1, props.level, props.level - 1];
  }

  return (
    <div className="MoneyTree">
      { branches.map( (branch, index) => {
        if (branch === props.level) {
          return <MoneyBranch
              key={index}
              status="active"
              amount={props.winnings[branch]}
            />
        } else {
          return <MoneyBranch
              key={index}
              status="inactive"
              amount={props.winnings[branch]}
            />
        }
      })}
    </div>
  )

}

export default MoneyTree;

// MoneyTree.propTypes = {
//
// };
