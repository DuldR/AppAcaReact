// Needs to be functional component

import React from "react";

const ReactBoard = (props) => {

    console.log(props);
    console.log(props.board.grid);
    return (
        props.board.grid.map((ele, idx) => {
            return <li key={idx}>idx</li>
        })
    )
}

export default ReactBoard