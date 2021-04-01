import React from 'react';
import StepListItemContainer from "./step_list_item_container.jsx"
import StepForm from "./step_form.jsx"


class StepList extends React.Component {

    componentDidMount() {
        this.props.requestSteps();
    }
    

    render() {

        const { steps, createStep, todo } = this.props;


        const listSteps = steps.map((ele, idx) => {
            return (
                <StepListItemContainer step={ele} key={"step-item-" + idx}/>
            )
        })

        return(
            <ul>
                <StepForm createStep={ createStep} todo_id={todo} receiveStep={receiveStep} />
                {listSteps}
            </ul>
        )

    }
}

export default StepList;
