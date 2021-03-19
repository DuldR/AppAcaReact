import React from 'react';
import API from '/frontend/util/util_funcs.js'

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);


        this.state = { testProps: props.receiveTodo }
        

        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        alert("Submit fired");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>OK</label>
                <input type='text'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default ToDoForm;