import React from "react";

// const ReactTile = (props) => {

//     let bombCount;

//     if (props.tile.explored === true && props.tile.bombed === false) {
//         bombCount = props.tile.adjacentBombCount();
//     }

//     return (
//         <div>
//             <div className="tile">{bombCount}</div>
//         </div>
//     )

// }

class ReactTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = { explored: props.explored, bombed: props.bombed, flagged: props.flagged }

        this.getBombs = this.getBombs.bind(this);
    }

    getBombs() {
        let bombCount;

        if (this.state.explored === true && this.state.bombed === false) {
            bombCount = this.props.tile.adjacentBombCount();
        }

        return bombCount;
    }




    render() {
        return (
            <div className="tile">{this.getBombs()}</div>
        )
    }
    
    
}

export default ReactTile