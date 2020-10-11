import React from 'react';
import './Puzzle.css';

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: 8
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const wrapper = document.querySelector(".wrapper");
    const tiles = wrapper.childNodes;
    const target = e.target;
    const id = target.id;
    const empty = this.state.empty;

    if (parseInt(id) === empty - 3 && empty > 2) {
      const tempNum = tiles[empty].innerText;
      tiles[empty].innerText = target.innerText;
      tiles[empty].classList.toggle("empty");
      target.innerText = tempNum;
      target.classList.toggle("empty");
      this.setState({empty: parseInt(id)});
    }
    else if (parseInt(id) === empty + 3 && empty < 6) {
      const tempNum = tiles[empty].innerText;
      tiles[empty].innerText = target.innerText;
      tiles[empty].classList.toggle("empty");
      target.innerText = tempNum;
      target.classList.toggle("empty");
      this.setState({empty: parseInt(id)});
    }
    else if (parseInt(id) === empty - 1) {
      const yes = empty !== 0 && empty !== 3 && empty !== 6;
      if (yes) {
        const tempNum = tiles[empty].innerText;
        tiles[empty].innerText = target.innerText;
        tiles[empty].classList.toggle("empty");
        target.innerText = tempNum;
        target.classList.toggle("empty");
        this.setState({empty: parseInt(id)});
      }
    }
    else if (parseInt(id) === empty + 1) {
      const yes = empty !== 2 && empty !== 5 && empty !== 8;
      if (yes) {
        const tempNum = tiles[empty].innerText;
        tiles[empty].innerText = target.innerText;
        tiles[empty].classList.toggle("empty");
        target.innerText = tempNum;
        target.classList.toggle("empty");
        this.setState({empty: parseInt(id)});
      }
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="item" id="0" onClick={this.handleClick}>1</div>
        <div className="item" id="1" onClick={this.handleClick}>2</div>
        <div className="item" id="2" onClick={this.handleClick}>3</div>
        <div className="item" id="3" onClick={this.handleClick}>4</div>
        <div className="item" id="4" onClick={this.handleClick}>5</div>
        <div className="item" id="5" onClick={this.handleClick}>6</div>
        <div className="item" id="6" onClick={this.handleClick}>7</div>
        <div className="item" id="7" onClick={this.handleClick}>8</div>
        <div className="item empty" id="8" onClick={this.handleClick}></div>
      </div>
    )
  }
}

export default Puzzle;

