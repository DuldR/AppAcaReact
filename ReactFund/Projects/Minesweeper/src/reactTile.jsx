import React from "react";

class ReactTile extends React.Component {

    constructor(props) {
        super(props);

        this.getBombs = this.getBombs.bind(this);
        this.selectTile = this.selectTile.bind(this);
        this.getFlag = this.getFlag.bind(this);

        this.getTileContent = this.getTileContent.bind(this);
    }

    getBombs() {
        let bombCount;


        if (this.props.tile.explored === true) {
            bombCount = this.props.tile.adjacentBombCount();
        }

        return bombCount;
    }

    getFlag() {

        let theString = " none"

        if (this.props.tile.explored === true) {
            theString += " explored";
        }

        return theString;

    }

    getTileContent() {
        if (this.props.tile.flagged === true) {
            return "⚑";
        } else if (this.props.tile.explored === true) {
            return this.props.tile.adjacentBombCount();
        }
    }

    selectTile(e) {
        e.preventDefault();
        this.props.func(this.props.tile, e.altKey);
        
    }


    render() {
        return (
            <li onClick={this.selectTile} className={"tile" + this.getFlag()}>
                {this.getTileContent()}
            </li>
        )
    }
    
    
}

export default ReactTile