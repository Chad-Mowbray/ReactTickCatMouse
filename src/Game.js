import React from 'react'
import Board from './Board'



class Game extends React.Component {

        

    render() {
      return (
        <div>
           {/* <Player catIsNext={true}/> */}
        <h1>Tic Cat Mouse</h1>
      
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