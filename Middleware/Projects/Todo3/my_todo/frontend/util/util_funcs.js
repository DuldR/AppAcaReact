const APIUtil = {
    uniqueId: () => {
        return new Date().getTime();
    },

    fetchTodos: () => (
        $.ajax({
            method: 'GET',
            url: '/api/todos'
        })
    ),

    createTodo: (todo) => (
        $.ajax({

            method: 'POST',
            url: `api/todos`,
            data: todo

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

module.exports = APIUtil