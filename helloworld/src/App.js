import React from 'react';
import logo from './logo.svg';
import './App.css';

function Clock() {
  return (
    <div id="clock">{new Date().toLocaleTimeString()}</div>
  );
}

function App() {
  return (
    <div id="main">
      <span>hello world</span>
      <Clock/>
    </div> 
  );
}

export default App;
