// Needs to be functional component

import React from "react";
import ReactTile from "./reactTile.jsx"

const ReactBoard = (props) => {

    console.log(props);
    return (
        props.board.grid.map((ele, idx) => {
            return (
                <div className="board" key={"board"+idx}>
                    <ul>
                    {ele.map((el, idx2) => {
                        let tileProps = {tile: el, func: props.func}
                        return (
                            <ReactTile key={"row-"+idx+"-tile-"+idx2} {...tileProps}/>
                        )
                    })}
                    </ul>
                </div>
            )
        })
    )
}



export default ReactBoard