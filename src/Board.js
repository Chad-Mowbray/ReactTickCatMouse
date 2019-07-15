import React from 'react'
import Square from './Square'
import Player from './Player'

 
  class Board extends React.Component {
   
      state = {
        squares: Array(9).fill(null),
        catIsNext: true,
        
      };
    


  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(a,b,c)
      console.log(squares)
      console.log(this.state.catIsNext)
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.catIsNext ? "cat" : "mouse";
        this.setState({
          squares: squares,
          catIsNext: !this.state.catIsNext,
        });
      }
  
    renderSquare(i) {
      
      
      let value = ''
      if(this.state.squares[i] === 'cat') {
        value = <span aria-label="a cat" role="img">🐈</span>
      } else if(this.state.squares[i] === 'mouse') {
        value = <span aria-label="a mouse" role="img">🐁</span>
      } else {
        value = null
      }

      return (
        <Square
          value={value}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
        const winner = this.calculateWinner(this.state.squares);
        
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.catIsNext ? "cat" : "mouse");
        }
    
  
      return (
        <div>
          <Player turn={this.state.catIsNext} value={this.state.apple}/>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  


  export default Board