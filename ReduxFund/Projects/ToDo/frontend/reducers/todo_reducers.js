import { RECEIVE_TODO } from '../actions/todo_actions.js'
import { RECEIVE_TODOS } from '../actions/todo_actions.js'



const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

// This works
const arrToObj = (arr, key) => {
    const newObj = {};

    return arr.reduce((obj, ele) => {
        return {
            ...obj,
            [ele[key]]: ele,
        }
    }, newObj)
}


const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_TODOS:
            return state = arrToObj(action.todos, 'id');

        case RECEIVE_TODO:
            console.log(action.todo);
            console.log(action.todo.id)
            let b = action.todo.id
            console.log(b)
            // JAVASCRIPT IS SO FUCKING BAD
            return state = {[b]:"FUCK OFF"}
        default:
            return state;
    }
}


export default todosReducer;