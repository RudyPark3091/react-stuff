import React from 'react';
import logo from './logo.svg';
import Puzzle from './Puzzle.js';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div id="clock">{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

function App() {
  return (
    <div id="main">
      <span id="deco">hello world</span>
      <Puzzle />
    </div> 
  );
}

export default App;
