import React from 'react'


export const BenchIndexItem = (props) => {

    return ( 
        <li>
            {props.desc}
            <ul>
                <li>
                    <label> Lat: </label>
                    {props.lat}
                </li>
                <li>
                    <label> Long: </label>
                    {props.long}
                </li>

                <li>
                    <label> Seats: </label>
                    {props.seats}
                </li>
            </ul>
        </li>
    )
}