import React from 'react';


class StepForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { todo_id: this.props.todo_id, title: "", body: "", done: false }
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addStep = this.addStep.bind(this);
        this.addStepBody = this.addStepBody.bind(this);
    
    }

    handleSubmit(event) {
        event.preventDefault();
        
        let step = {step: this.state}
        this.props.createStep(step);

    }

    addStep(e) {
        e.preventDefault();
        this.setState( {title: e.currentTarget.value } )
    }

    addStepBody(e) {
        e.preventDefault();
        this.setState( {body: e.currentTarget.value} )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} defaultValue={this.state.value}>
                <label>Step Title</label>
                <br></br>
                <input onChange={this.addStep} type='text'></input>
                <br></br>
                <label>Step Body</label>
                <br></br>
                <input onChange={this.addStepBody} type='text'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default StepForm;