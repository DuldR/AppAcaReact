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

const stepsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_STEPS:
          return state = arrToObj(action.steps, 'id');
        case RECEIVE_STEP:
          return state = Object.assign(state, {[action.step.id]: action.step});
        case REMOVE_STEP:
          delete state[action.step.id]
          return state;
        default:
            return state;
    }
}


export default stepsReducer