import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/steps_actions.js'

const initialState = {
  1: {
    id: 1,
    todo_id: 1,
    body: "Smoek Weed",
    done: false
  },
  2: {
    id: 2,
    todo_id: 2,
    body: "AWW YEAH",
    done: true
  }
};

const arrToObj = (arr, key) => {
    const newObj = {};

    return arr.reduce((obj, ele) => {
        return {
            ...obj,
            [ele[key]]: ele,
        }
    }, newObj)
}

// I was mutating state. WRONG
const stepsReducer = (state = initialState, action) => {

  Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STEPS:
          let nextState = Object.assign({}, state);
          return nextState = arrToObj(action.steps, 'id');
        case RECEIVE_STEP:
          nextState = Object.assign(state, {[action.step.id]: action.step});
          return nextState
        case REMOVE_STEP:
          nextState = Object.assign({}, state);
          delete nextState[action.step.id]
          return nextState;
        default:
            return state;
    }
}


export default stepsReducer