import React from 'react';
import StepListItemContainer from "./step_list_item_container.jsx"


export const StepList = ( {todo_id, steps, receiveStep} ) => {

    const listSteps = steps.map((ele, idx) => {
        return (
            <StepListItemContainer step={ele} key={idx}/>
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