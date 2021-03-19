import React from 'react';

import { ToDoItem } from './todo_list_item.jsx'
import ToDoForm from './todo_form.jsx'



export const ToDo = ({ todos, receiveTodo }) => {
    const listTodos = todos.map((ele, idx) => (
        <ToDoItem key={idx} todo={ele} />
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