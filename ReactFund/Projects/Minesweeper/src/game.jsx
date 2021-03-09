import React from "react";
import {Board, Tile} from "./minesweeper.js"
import ReactBoard from "./reactBoard.jsx"
import ReactTile from "./reactTile.jsx"

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = { board: new Board(3, 1) }

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }


    restartGame() {

    }

    updateGame (obj, flag) {

        if (flag === true) {
            obj.toggleFlag();
        } else {
            obj.explore();
        }

        if (this.state.board.won() === true) {
            document.getElementById('modal').classList.add('is-active');
        } else {

            if (this.state.board.lost() === true) {
                document.getElementById('modal').classList.add('is-active');
            }

            this.setState( {board: this.state.board} )
        }
    }

    render() {


        let boardProps = {board: this.state.board, func: this.updateGame}

        console.log(document.getElementById('modal'))

        
        
        return (

            <div className="game">
                <ReactBoard {...boardProps}/>
            </div>
        )
    }


}

export default Game