import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  
  static propTypes = {
    initialScore: PropTypes.number,
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  constructor(props){
    super(props);
    this.state={
      score: this.props.initialScore,
    };
    // this.incrementScore = this.incrementScore.bind(this);
    // this.decrementScore = this.decrementScore.bind(this);
  }
  // incrementScore = e => {
  //   this.setState({
  //     score: this.state.score + 1,
  //   });
  // };
  // 
  // decrementScore = e => {
  //   var thisScore = this.state.score;
  //   if(thisScore > 0){
  //     this.setState({
  //       score: this.state.score - 1,
  //     });
  //   }
  // };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => {if(this.props.score > 0){this.props.onChange(-1);}}}> - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment" onClick={() => {this.props.onChange(+1);}}> + </button>
      </div>
    );
  }
}

export default Counter;
