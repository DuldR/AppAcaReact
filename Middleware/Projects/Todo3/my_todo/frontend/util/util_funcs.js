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
            dataType: 'json',
            data: todo

        })
    )


}

module.exports = APIUtil