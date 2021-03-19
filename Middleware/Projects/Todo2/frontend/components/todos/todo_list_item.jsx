import React from 'react';

export const ToDoItem = ( {todo} ) => {

    return (
        <li>
            <label>Title: </label>
            {todo.title}
            <br></br>
            <label>Body: </label>
            {todo.body}
        </li>
    )
}