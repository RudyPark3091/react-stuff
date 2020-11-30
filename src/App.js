import React from 'react';
import logo from './logo.svg';
import Puzzle from './puzzle/Puzzle.js';
import Calendar from './calendar/Calendar.js';
import './App.css';

function App() {
  return (
    <div id="main">
      <span id="deco">hello world</span>
      <Calendar />
    </div> 
  );
}

export default App;
