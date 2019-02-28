import React, { Component } from 'react';
import './Lifelines.css';
import Lifeline from './Lifeline';


export default class Lifelines extends Component {
  state = {
    lifelines : [
      {
        id : 1,
        name : <i className='ion-ios-telephone'></i>,
        status : false
      },
      {
        id : 2,
        name : <i className='ion-ios-people'></i>,
        status : false
      },
      {
        id : 3,
        name : "50/50",
        status : false
      }
    ]
  }

  lifelineHandler = (id) => {
    const usedLine = [...this.state.lifelines];
    const updateLines = usedLine.map( line => {
      if (line.id === id) {
        line.status = true;
      }
      return line;
    })
    this.setState({
      lifelines : updateLines
    })
  }



  render() {
    return (
      <div className="Lifelines">
        {this.state.lifelines.map(line => (
          <Lifeline
            key={line.id}
            clicked={this.lifelineHandler}
            name={line.name}
            id={line.id}
            status={line.status}
          />
        ))}
      </div>
    );
  }

}
