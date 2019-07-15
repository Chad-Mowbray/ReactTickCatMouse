import React from 'react'
import Board from './Board'
import CatPlayer from './CatPlayer'
import MousePlayer from './MousePlayer'

class Game extends React.Component {

        

    render() {
      return (
        <div>
        <h1>A Game of Cat and Mouse</h1>
        <CatPlayer />
        <MousePlayer />
        <div className="game">
            
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        </div>
      );
    }
  }

export default Game