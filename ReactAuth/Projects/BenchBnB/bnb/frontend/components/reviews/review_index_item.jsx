import React from 'react'
import { Link } from 'react-router-dom'


export const ReviewIndexItem = (props) => {

    return ( 
        <li>
            <ul>
                <li>
                    <label> Comment: </label>
                    {props.comment}
                </li>
                <li>
                    <label> Rating: </label>
                    {props.rating}
                </li>
            </ul>
        </li>
    )
}