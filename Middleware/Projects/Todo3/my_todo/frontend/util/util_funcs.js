const APIUtil = {
    uniqueId: () => {
        return new Date().getTime();
    },

    fetchTodos: () => {
        $.ajax({
            method: 'GET',
            url: '/api/todos'
        }).then(
            todos => console.log(todos),
            error => console.log(error)
        )
    }


}

module.exports = APIUtil