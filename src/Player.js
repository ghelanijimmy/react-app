import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends Component {
  render() {
    return (

        <div className="player">
          <div className="player-name">
            {this.props.name}
          </div>
          <div className="player-score">
            <Counter score = {this.props.score} onChange={this.props.onScoreChange}/>
          </div>
        </div>

    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
};

export default Player;
