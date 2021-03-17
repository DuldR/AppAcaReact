import React from 'react';

export const ToDo = ({ todos }) => {
    const listTodos = todos.map((ele, idx) => (
        <li key={idx}>{ele.title}</li>
    ));

    return (
        <ul>
            {listTodos}
        </ul>
    )

}