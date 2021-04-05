import React from 'react';

import TodoDetailViewContainer from './todo_detail_container.jsx'

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);

        // This deconstructs correctly
   
        this.state = { todo: props.todo, detail: false }

        console.log(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.listTag = this.listTag.bind(this);


   
    }

    listTag() {

        // console.log(this.props);

        // if (this.state.todo.tags === undefined) {
        //     return <li>No Tags!</li>
        // } else {

        //     let tagList = this.state.todo.tags.map((tag,idx) => {

        //         <li key={'tag-' + idx}>{tag.name}</li>
        //     })

        //     return tagList
        // }

        let tagList = this.props.tags.map((tag, idx) => {
            return <li key={'tag-' + idx}>{tag.name}</li>
        })

        
        return tagList

    }

    handleDelete(event) {
        event.preventDefault();
        console.log(this.props);
    }

    handleDone(event) {
        event.preventDefault();

        
        let newTodo = this.toggleDone(this.state.todo);

        this.props.updateTodo(newTodo)
    
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

        const { deleteTodo } = this.props;

        return (
            <li>
                <a onClick={this.showDetail}>{this.state.todo.title}</a>
                <br></br>
                {this.state.detail ? <TodoDetailViewContainer deleteTodo={ deleteTodo } todo={this.props.todo}/> : ""}
                <button onClick={this.handleDone}>{this.state.todo.done ? 'Undo' : 'Done'}</button>
                <ul>
                    {this.listTag()}
                </ul>
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