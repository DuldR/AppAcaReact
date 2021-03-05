import React from "react";
import {Board, Tile} from "./minesweeper.js"

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = { board: new Board() }


    }

    render() {

        return (
            <div>Game</div>
        )
    }


}

export default Game