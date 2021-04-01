import React from 'react';
import StepListItemContainer from "./step_list_item_container.jsx"
import StepForm from "./step_form.jsx"






class StepList extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.requestSteps();
    }
    

    render() {

        const { steps, requestSteps, receiveSteps } = this.props;

        const listSteps = steps.map((ele, idx) => {
            return (
                <StepListItemContainer step={ele} key={"step-item-" + idx}/>
            )
        })

        return(
            <ul>
                {listSteps}
            </ul>
        )

    }
}

export default StepList;

// export const StepList = ( {todo_id, steps, receiveStep} ) => {

//     // This allows me to update. Why? i dont understand
//     let props = {receiveStep}
//     let formProps = {todo_id, receiveStep}
//     console.log(props);

//     const listSteps = steps.map((ele, idx) => {
//         return (
//             <StepListItemContainer step={ele} key={"step-item-" + idx} props={props}/>
//         )
//     })

//     return (
//         <div>
//             <StepForm props={formProps} />
//             <ul>
//                 {listSteps}
//             </ul>

//         </div>
//     )
// }