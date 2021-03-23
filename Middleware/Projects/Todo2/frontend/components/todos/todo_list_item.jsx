import React from 'react';

export const ToDoItem = ( {todo, props} ) => {

    const handleDelete = (event) => {
        event.preventDefault();
        props.removeTodo(todo);
    }

    return (
        <li>
            <label>Title: </label>
            {todo.title}
            <br></br>
            <label>Body: </label>
            {todo.body}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}