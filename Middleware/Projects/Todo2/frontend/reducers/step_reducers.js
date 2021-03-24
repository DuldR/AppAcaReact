import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/steps_actions.js'

const initialState = {
  1: {
    id: 1,
    todo_id: 1,
    title: "Step1",
    body: "Smoek Weed",
    done: false
  },
  2: {
    id: 2,
    todo_id: 2,
    title: "Step1",
    body: "AWW YEAH",
    done: true
  }
};


// I was mutating state. WRONG
const stepsReducer = (state = initialState, action) => {

  Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STEPS:
          let nextState = Object.assign({}, state);
          return nextState
        case RECEIVE_STEP:
          console.log("reducer hit")
          nextState = Object.assign({}, state, {[action.step.id]: action.step});
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