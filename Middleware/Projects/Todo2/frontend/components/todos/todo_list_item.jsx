import React from 'react';

export const ToDoItem = ( {todo} ) => {

    return (
        <li>
            {todo.title}
        </li>
    )
}