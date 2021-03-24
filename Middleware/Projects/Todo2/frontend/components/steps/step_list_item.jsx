import React from 'react';


class StepListItem extends React.Component {

    constructor (props) {
        super(props);

        this.state = { step: props.step, detail: false }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.removeStep(this.state.step);

    }

    handleDone(event) {
        event.preventDefault();

        let newStep = this.toggleDone(this.state.step);
        // Theres a better way to write this

        console.log(newStep);
        this.props.receiveStep(newStep);
        
    }

    toggleDone(step) {
        step.done = !step.done;
        return step;
    }

    showDetail(event) {
        event.preventDefault();
        this.setState( { detail: !this.state.detail })
    }

    render() {
        return (
            <li>
                <a onClick={this.showDetail}>{this.state.step.title}</a>
                <br></br>
                {this.state.detail ? this.state.step.body : ""}
                <button onClick={this.handleDone}>{this.state.step.done ? 'Undo' : 'Done'}</button>
                <button onClick={this.handleDelete}>Delete</button>
            </li>
        )
    }

}

export default StepListItem