import React from 'react';

import ToDoItem from './todo_list_item.jsx'
import ToDoForm from './todo_form.jsx'
import StepListContainer from '../steps/step_list_container.jsx'



export const ToDo = ({ todos, receiveTodo, removeTodo }) => {
    let props = {receiveTodo, removeTodo}
    const listTodos = todos.map((ele, idx) => (
        <div key={idx}>
            <ToDoItem key={idx + "-todo"} todo={ele} props={props} />
            <StepListContainer key={idx + "-step"} todo_id={ele.id}/>
        </div>
    ));


    return (

        <div>
            <ul>
                {listTodos}
            </ul>

            

            <ToDoForm receiveTodo={receiveTodo} />
        </div>
    )

}