import React from 'react';



export const TodoDetailView = ({todo, removeTodo}) => {

    const handleDelete = (event) => {
        event.preventDefault();
        removeTodo(todo);
    }

    return (
        <div>
            <br></br>
            <label>Body: </label>
            {todo.body}
            <br></br>
            <label>Done: </label>
            {todo.done ? 'Yes' : 'No' }
            <br></br>
            <button onClick={handleDelete}>Delete</button>
            <br></br>
        </div>
    )
}