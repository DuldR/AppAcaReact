export const allTodos = state => {
    return Object.values(state.todos)
}

export const allErrors = state => {
    return Object.values(state.errors)
}

export const stepsByTodoId = (state, todoId) => {

    console.log(state)
    let listSteps = Object.values(state.steps);

    return listSteps.filter(ele => ele.todo_id === todoId)

}