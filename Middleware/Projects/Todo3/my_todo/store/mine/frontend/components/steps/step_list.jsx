import React from 'react';
import StepListItemContainer from "./step_list_item_container.jsx"
import StepForm from "./step_form.jsx"


export const StepList = ( {todo_id, steps, receiveStep} ) => {

    // This allows me to update. Why? i dont understand
    let props = {receiveStep}
    let formProps = {todo_id, receiveStep}
    const listSteps = steps.map((ele, idx) => {
        return (
            <StepListItemContainer step={ele} key={"step-item-" + idx} props={props}/>
        )
    })

    return (
        <div>
            <StepForm props={formProps} />
            <ul>
                {listSteps}
            </ul>

        </div>
    )
}