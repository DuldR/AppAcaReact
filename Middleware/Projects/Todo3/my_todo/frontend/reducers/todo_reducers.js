import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions.js'



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


const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_TODOS:
            let nextState = Object.assign({}, state);
            return nextState
        case RECEIVE_TODO:
            nextState = Object.assign({}, state, {[action.todo.id]: action.todo});
            return nextState
        case REMOVE_TODO:
            nextState = Object.assign({}, state);
            delete nextState[action.todo.id]
            return nextState;
        default:
            return state;
    }
}


export default todosReducer;