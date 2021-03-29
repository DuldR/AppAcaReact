export const allTodos = state => {
    return Object.values(state.todos)
}

export const stepsByTodoId = (state, todoId) => {

    let listSteps = Object.values(state.steps);

    return listSteps.filter(ele => ele.todo_id === todoId)

}