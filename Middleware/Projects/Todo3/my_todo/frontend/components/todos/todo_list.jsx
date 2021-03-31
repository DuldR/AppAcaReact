import React from 'react';
// Components
import ToDoItem from './todo_list_item.jsx';
import ToDoForm from './todo_form.jsx';

class TodoList extends React.Component {
  componentDidMount() {

    this.props.requestTodos();
  }

  render() {
    const { todos, deleteTodo, updateTodo, errors, createTodo } = this.props;

    const todoItems = todos.map(todo => (
        <ToDoItem
          key={ todo.id }
          todo={ todo }
          updateTodo={ updateTodo } deleteTodo={ deleteTodo } />
      )
    );

    return(
      <div>
        <ToDoForm createTodo={ createTodo } errors={ errors }/>
        <ul className="todo-list">
          { todoItems }
        </ul>
      </div>
    );
  }
}

export default TodoList;


// import React from 'react';

// import ToDoItem from './todo_list_item.jsx'
// import ToDoForm from './todo_form.jsx'
// import StepListContainer from '../steps/step_list_container.jsx'



// export const ToDo = ({ todos, receiveTodo, removeTodo }) => {
//     let props = {receiveTodo, removeTodo}
//     const listTodos = todos.map((ele, idx) => (
//         <div key={idx}>
//             <ToDoItem key={idx + "-todo"} todo={ele} props={props} />
//             <StepListContainer key={idx + "-step"} todo_id={ele.id}/>
//         </div>
//     ));


//     return (

//         <div>
//             <ul>
//                 {listTodos}
//             </ul>

            

//             <ToDoForm receiveTodo={receiveTodo} />
//         </div>
//     )

// }