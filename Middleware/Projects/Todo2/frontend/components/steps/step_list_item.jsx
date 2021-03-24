import React from 'react';


class StepListItem extends React.Component {

    constructor (props) {
        super(props);

        this.state = { step: props.step }
    }

    render() {
        return (
            <div>
                {this.state.step.title}
                {this.state.step.body}
            </div>
        )
    }

}

export default StepListItem