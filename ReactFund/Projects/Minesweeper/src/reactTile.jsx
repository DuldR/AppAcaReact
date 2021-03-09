import React from "react";

class ReactTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = { flag: "" }

        this.getBombs = this.getBombs.bind(this);
        this.selectTile = this.selectTile.bind(this);
        this.getFlag = this.getFlag.bind(this);
    }

    getBombs() {
        let bombCount;

        bombCount = this.props.tile.adjacentBombCount();


        return bombCount;
    }

    getFlag() {

        let theString;

        if (this.props.tile.explored === true) {
            theString += " explored";
        };

        return theString;

    }

    selectTile(e) {
        e.preventDefault();
        this.props.func(this.props.tile, true);
        
    }


    render() {
        return (
            <li onClick={this.selectTile} className={"tile" + this.getFlag()}>
                {"Explored?: " + this.props.tile.explored}
                <span>{"Bombed?: " + this.props.tile.bombed}</span>
                <span>{"Adjacent Bombs: " + this.props.tile.adjacentBombCount()}</span>
            </li>
        )
    }
    
    
}

export default ReactTile