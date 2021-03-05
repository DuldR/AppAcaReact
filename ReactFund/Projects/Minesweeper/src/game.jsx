import React from "react";
import {Board, Tile} from "./minesweeper.js"
import ReactBoard from "./reactBoard.jsx"
import ReactTile from "./reactTile.jsx"

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = { board: new Board(2, 1) }


    }

    updateGame () {

    }

    render() {

        console.log(this.state.board);

        return (

            <div>
                <ReactBoard props={this.state.board, this.updateGame}/>
                <ReactTile />

            </div>
        )
    }


}

export default Game