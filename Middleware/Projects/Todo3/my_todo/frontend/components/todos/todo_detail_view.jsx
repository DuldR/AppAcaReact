import React from 'react';

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {todo: props.todo }

        console.log(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();

        this.props.deleteTodo(this.state.todo)
        
    }

    render() {
        return (
            <div>
                <br></br>
                <label>Body: </label>
                {this.props.todo.body}
                <br></br>
                <label>Done: </label>
                {this.props.todo.done ? 'Yes' : 'No' }
                <br></br>
                <button onClick={this.handleDelete}>Delete</button>
                <br></br>
            </div>
        )
    }


}

export default TodoDetailView   
// export const TodoDetailView = ({props, todo, deleteTodo }) => {

//     const handleDelete = (event) => {
//         event.preventDefault();
//         console.log(todo);
//         console.log(deleteTodo);
//         deleteTodo(todo);
//     }

//     return (
//         <div>
//             <br></br>
//             <label>Body: </label>
//             {todo.body}
//             <br></br>
//             <label>Done: </label>
//             {todo.done ? 'Yes' : 'No' }
//             <br></br>
//             <button onClick={handleDelete}>Delete</button>
//             <br></br>
//         </div>
//     )
// }