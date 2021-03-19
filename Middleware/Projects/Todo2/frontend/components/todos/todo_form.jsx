import React from 'react';
import API from '/frontend/util/util_funcs.js'

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);


        this.state = { value:1, title: "" }
        const newTodo = { id: 3, title: 'Learn Redux', body: 'It is fundamental', done: false }

        // console.log(props)
        // console.log(props.receiveTodo);
        // console.log(props.receiveTodo(newTodo))
        

        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTodo = this.addTodo.bind(this);
    
    }

    handleSubmit(event) {
        event.preventDefault();
        // Fire receive
    }

    addTodo(e) {
        e.preventDefault();
        this.setState( {title: e.currentTarget.value } )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} defaultValue={this.state.value}>
                <label>Title</label>
                <input onChange={this.addTodo} type='text'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default ToDoForm;