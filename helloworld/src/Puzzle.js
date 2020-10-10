import React from 'react';
import './Puzzle.css';

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: 8,
      zero: 1,
      one: 2,
      two: 3,
      three: 4,
      four: 5,
      five: 6,
      six: 7,
      seven: 8,
      eight: 'empty'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const target = e.target;
    console.log(target.innerText);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="item" onClick={this.handleClick}>1</div>
        <div className="item" onClick={this.handleClick}>2</div>
        <div className="item" onClick={this.handleClick}>3</div>
        <div className="item" onClick={this.handleClick}>4</div>
        <div className="item" onClick={this.handleClick}>5</div>
        <div className="item" onClick={this.handleClick}>6</div>
        <div className="item" onClick={this.handleClick}>7</div>
        <div className="item" onClick={this.handleClick}>8</div>
        <div className="item" onClick={this.handleClick}></div>
      </div>
    )
  }
}

export default Puzzle;
