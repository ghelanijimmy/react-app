import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var PLAYERS = [
  {
    name: "Jimmy Ghelani",
    score: 0,
    id: 1,
  },
  {
    name: "Aliya Kamalia",
    score: 0,
    id: 2,
  }
];

ReactDOM.render(<App initialPlayers={PLAYERS}/>, document.getElementById('container'));
registerServiceWorker();
