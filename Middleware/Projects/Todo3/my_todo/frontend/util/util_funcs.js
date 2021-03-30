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
            url: 'api/todos',
            data: todo

        })
    )


}

module.exports = APIUtil