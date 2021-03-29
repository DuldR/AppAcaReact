const APIUtil = {
    uniqueId: () => {
        return new Date().getTime();
    },

    fetchTodos: () => {
        $.ajax({
            method: 'GET',
            url: '/api/todos'
        })
    }


}

module.exports = APIUtil

// export const fetchTodos = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/todos'
//   })
// );


// fetchTodos: () => {
//     $.ajax({
//         method: 'GET',
//         url: '/api/todos'
//     }).then(
//         todos => console.log(todos),
//         error => console.log(error)
//     )
// }
