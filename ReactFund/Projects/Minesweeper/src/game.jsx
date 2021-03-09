import React from "react";
import {Board, Tile} from "./minesweeper.js"
import ReactBoard from "./reactBoard.jsx"
import ReactTile from "./reactTile.jsx"

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = { board: new Board(9, 5) }

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }


    restartGame(e) {

        e.preventDefault();

        document.getElementById('modal').classList.remove('is-active', 'won', 'lost');
        document.getElementsByClassName('modal-close')[0].firstChild.innerHTML = ""; 

        this.setState( {board: new Board(9, 5) })

    }

    updateGame (obj, flag) {

        if (flag === true) {
            obj.toggleFlag();
        } else {
            obj.explore();
        }

        if (this.state.board.won() === true) {

            let gameState = document.createElement('h1');
            gameState.innerHTML = "Won!"
            document.getElementsByClassName('modal-close')[0].prepend(gameState);
            document.getElementById('modal').classList.add('is-active', 'won');
        } else {

            if (this.state.board.lost() === true) {
                let gameState = document.createElement('h1');
                gameState.innerHTML = "Lost!"
                document.getElementsByClassName('modal-close')[0].prepend(gameState);
                document.getElementById('modal').classList.add('is-active', 'lost');
            }

            this.setState( {board: this.state.board} )
        }
    }

    render() {


        let boardProps = {board: this.state.board, func: this.updateGame}

        document.getElementById('modal-close').onclick = this.restartGame
        
        
        return (

    
            <div className="game">
                <ReactBoard {...boardProps}/>
            </div>
        )
    }


}

export default Game