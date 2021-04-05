import React from 'react';
import API from '/frontend/util/util_funcs.js'

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);


        this.state = { title: "", body: "", done: false, tag_names: [] }
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.addTodoBody = this.addTodoBody.bind(this);
        this.addTag = this.addTag.bind(this);
        this.listTags = this.listTags.bind(this);

    
    }

    handleSubmit(event) {
        event.preventDefault();
        // Fire receiv
        let todo = {todo: this.state}
        this.props.createTodo(todo).then(
            () => this.setState({title: '', body: '', tag_names: []})
        )

        let form = document.getElementById('todo-submit');
        form.reset()

    }

    addTodo(e) {
        e.preventDefault();
        this.setState( {title: e.currentTarget.value } )
    }

    addTodoBody(e) {
        e.preventDefault();
        this.setState( {body: e.currentTarget.value} )
    }

    addTag(e) {
        e.preventDefault();
        let tagInput = document.getElementsByClassName('tag-input');
        // console.log(tagInput[0].value);
        this.setState( {tag_names: this.state.tag_names.concat(tagInput[0].value)})
    }

    listTags() {
        
        let tagList = this.state.tag_names.map((tag,idx) => (
            <li key={'added-tag-' + idx}>{tag}</li>
        ))

        return tagList

    }

    render() {
        return (
            <form id="todo-submit" onSubmit={this.handleSubmit} defaultValue={this.state.value}>
                <label>Errors</label>
                {this.props.errors}
                <br></br>
                <label>Title</label>
                <br></br>
                <input onChange={this.addTodo} type='text'></input>
                <br></br>
                <label>Body</label>
                <br></br>
                <input onChange={this.addTodoBody} type='text'></input>
                <br></br>
                <label>Tage</label>
                <ul>
                    {this.listTags()}
                </ul>
                <input className="tag-input" type='text'></input>
                <br></br>
                <button type="button" onClick={this.addTag}>Add Tag</button>
                <button>Submit</button>
            </form>
        )
    }
}

export default ToDoForm;