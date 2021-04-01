import React from 'react';
import StepListContainer from '../steps/step_list_container.jsx'

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: props.todo }
        this.handleDelete = this.handleDelete.bind(this);


    }

    handleDelete(event) {
        event.preventDefault();

        this.props.deleteTodo(this.state.todo)
        
    }

    render() {
        const { receiveSteps, deleteTodo, removeTodo, todo } = this.props
        return (
            <div>
                <br></br>
                <label>Body: </label>
                {this.props.todo.body}
                <br></br>
                <label>Done: </label>
                {this.props.todo.done ? 'Yes' : 'No' }
                <br></br>

                <div>
                    <StepListContainer todo_id={ todo.id } receiveSteps={receiveSteps}/>
                </div>
                <br></br>
                <button onClick={this.handleDelete}>Delete</button>
                <br></br>
            </div>
        )
    }


}

export default TodoDetailView   