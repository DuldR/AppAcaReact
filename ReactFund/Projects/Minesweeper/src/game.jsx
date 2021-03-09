import React from "react";
import {Board, Tile} from "./minesweeper.js"
import ReactBoard from "./reactBoard.jsx"
import ReactTile from "./reactTile.jsx"

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = { board: new Board(3, 1) }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame (obj, flag) {

        obj.explore();

        this.setState( {board: this.state.board} )


    }

    render() {


        let boardProps = {board: this.state.board, func: this.updateGame}

        return (

            <div className="game">
                <ReactBoard {...boardProps}/>
            </div>
        )
    }


}

export default Game