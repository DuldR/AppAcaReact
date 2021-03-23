import React from 'react';

import { TodoDetailView } from './todo_detail_view.jsx'

export const ToDoItem = ( {todo, props} ) => {

    const handleDelete = (event) => {
        event.preventDefault();
        props.removeTodo(todo);
    }

    const handleDone = (event) => {
        event.preventDefault();
        let newTodo = toggleDone(todo);
        props.receiveTodo(newTodo);
    
    }

    const toggleDone = (todo) => {
        todo.done = !todo.done;
        return todo;
    }

    return (
        <li>
            <label>Title: </label>
            {todo.title}
            <br></br>
            <button onClick={handleDone}>{todo.done ? 'Undo' : 'Done'}</button>
            <TodoDetailView />
        </li>
    )
}

// Todo
// 
// <br></br>
// <label>Body: </label>
// {todo.body}
// <br></br>
// <label>Done: </label>
// {todo.done ? 'Yes' : 'No' }
// <br></br>
// <button onClick={handleDelete}>Delete</button>
// <br></br>