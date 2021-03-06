import React from 'react';
import API from '/frontend/util/util_funcs.js'

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);


        this.state = { id: API.uniqueId(), title: "", body: "Test Body", done: false }
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.addTodoBody = this.addTodoBody.bind(this);
    
    }

    handleSubmit(event) {
        event.preventDefault();
        // Fire receive
        this.props.receiveTodo(this.state);

    }

    addTodo(e) {
        e.preventDefault();
        this.setState( {title: e.currentTarget.value } )
    }

    addTodoBody(e) {
        e.preventDefault();
        this.setState( {body: e.currentTarget.value} )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} defaultValue={this.state.value}>
                <label>Title</label>
                <br></br>
                <input onChange={this.addTodo} type='text'></input>
                <br></br>
                <label>Body</label>
                <br></br>
                <input onChange={this.addTodoBody} type='text'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default ToDoForm;