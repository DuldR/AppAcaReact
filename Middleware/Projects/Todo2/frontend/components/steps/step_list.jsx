import React from 'react';
import StepListItemContainer from "./step_list_item_container.jsx"


export const StepList = ( {todo_id, steps, receiveStep} ) => {

    // This allows me to update. Why? i dont understand
    let props = {receiveStep}
    const listSteps = steps.map((ele, idx) => {
        return (
            <StepListItemContainer step={ele} key={"step-item-" + idx} props={props}/>
        )
    })

    return (
        <div>
            <ul>
                {listSteps}
            </ul>
            {/* StepForm */}
        </div>
    )
}