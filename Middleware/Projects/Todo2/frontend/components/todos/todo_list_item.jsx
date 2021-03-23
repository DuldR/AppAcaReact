import React from 'react';

import { TodoDetailView } from './todo_detail_view.jsx'




class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { detail: false }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);

        console.log(props);
        // console.log(todo);
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.removeTodo(todo);
    }

    handleDone(event) {
        event.preventDefault();
        let newTodo = toggleDone(todo);
        this.props.receiveTodo(newTodo);
    
    }

    toggleDone(todo) {
        todo.done = !todo.done;
        return todo;
    }

    render() {
        return (
            <li>
                <label>Title: </label>
                {/* {todo.title} */}
                <br></br>
                {/* <button onClick={handleDone}>{todo.done ? 'Undo' : 'Done'}</button> */}
                <TodoDetailView />
            </li>
        )

    }



}

export default ToDoItem





// Function COmponent, but will require state to render detail view
// export const ToDoItem = ( {todo, props} ) => {

//     const handleDelete = (event) => {
//         event.preventDefault();
//         props.removeTodo(todo);
//     }

//     const handleDone = (event) => {
//         event.preventDefault();
//         let newTodo = toggleDone(todo);
//         props.receiveTodo(newTodo);
    
//     }

//     const toggleDone = (todo) => {
//         todo.done = !todo.done;
//         return todo;
//     }

//     return (
//         <li>
//             <label>Title: </label>
//             {todo.title}
//             <br></br>
//             <button onClick={handleDone}>{todo.done ? 'Undo' : 'Done'}</button>
//             <TodoDetailView />
//         </li>
//     )
// }

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