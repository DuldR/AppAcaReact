const StepsAPIUtil = {

    fetchSteps: () => (
        $.ajax({
            method: 'GET',
            url: '/api/steps'
        })
    ),

    createStep: (step) => (
        $.ajax({

            method: 'POST',
            url: `api/steps`,
            data: step

        })
    ),

    updateTodo: (todo) => (
        $.ajax({
            method: "PATCH",
            url: `api/todos/${todo.id}`,
            data: { todo }
        })
    ),

    deleteTodo: (todo) => (
        $.ajax({
            method: "DELETE",
            url: `api/todos/${todo.id}`,
            data: todo
        })
    )


}

module.exports = StepsAPIUtil