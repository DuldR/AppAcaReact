import React from 'react'


export const BenchIndexItem = (props) => {

    return ( 
        <li>
            {props.desc}
            <ul>
                <li>
                    <label> Lat </label>
                    {props.lat}
                    <label> Long </label>
                    {props.long}
                </li>
            </ul>
        </li>
    )
}