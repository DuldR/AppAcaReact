import React from "react";
import {Board, Tile} from "./minesweeper.js"
import ReactBoard from "./reactBoard.jsx"
import ReactTile from "./reactTile.jsx"

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = { board: new Board(2, 1) }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame () {

    }

    render() {
        let boardProps = {board: this.state.board, func: this.updateGame}

        return (

            <div>
                <ReactBoard {...boardProps}/>
            </div>
        )
    }


}

export default Game