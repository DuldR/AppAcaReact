import React from 'react';

import TodoDetailViewContainer from './todo_detail_container.jsx'

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);

        // This deconstructs correctly
        const { removeTodo, receiveTodo } = props.props
        
        this.state = { todo: props.todo, detail: false }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.showDetail = this.showDetail.bind(this);

        
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

    showDetail(event) {
        event.preventDefault();
        this.setState( { detail: !this.state.detail })
    }

    render() {
        return (
            <li>
                <label>Title: </label>
                <a onClick={this.showDetail}>{this.state.todo.title}</a>
                <br></br>
                {/* <button onClick={handleDone}>{todo.done ? 'Undo' : 'Done'}</button> */}
                {this.state.detail ? <TodoDetailViewContainer /> : ""}
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