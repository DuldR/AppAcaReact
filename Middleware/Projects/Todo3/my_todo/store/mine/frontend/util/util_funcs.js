const APIUtil = {
    uniqueId: () => {
        return new Date().getTime();
    },

    fetchTodos: () => (
        $.ajax({
            method: 'GET',
            url: '/api/todos'
        })
    )


}

module.exports = APIUtil