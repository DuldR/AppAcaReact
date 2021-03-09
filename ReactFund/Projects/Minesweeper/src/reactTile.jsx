import React from "react";

class ReactTile extends React.Component {

    constructor(props) {
        super(props);


        this.state = { explored: props.tile.explored, bombed: props.tile.bombed, flagged: props.tile.flagged }

        this.getBombs = this.getBombs.bind(this);
        this.selectTile = this.selectTile.bind(this);

        if (this.state.explored === true) {
            this.flag = "explored";
        }
    }

    getBombs() {
        let bombCount;

        bombCount = this.props.tile.adjacentBombCount();


        return bombCount;
    }

    selectTile(e) {
        e.preventDefault();
        this.props.func(this.props.tile, true);
        
    }


    render() {
        console.log(this.state.explored);
        return (
            <div onClick={this.selectTile} className={"tile"}>
                {"Explored?: " + this.props.tile.explored}
            </div>
        )
    }
    
    
}

export default ReactTile