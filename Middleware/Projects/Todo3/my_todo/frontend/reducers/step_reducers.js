import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/steps_actions.js'

const initialState = {
  // 6: {
  //   id: 25,
  //   todo_id: 1,
  //   title: "Step1",
  //   body: "Smoek Weed",
  //   done: false
  // },
  // 7: {
  //   id: 576,
  //   todo_id: 2,
  //   title: "Step1",
  //   body: "AWW YEAH",
  //   done: true
  // },
  // 8: {
  //   id: 56756,
  //   todo_id: 1,
  //   title: "Step2",
  //   body: "Step2 of 1",
  //   done: false
  // },
};


// I was mutating state. WRONG
const stepsReducer = (state = initialState, action) => {

  Object.freeze(state);
  let nextState = {};

    switch (action.type) {
        case RECEIVE_STEPS:
          action.steps.forEach( step => {
                nextState[step.id] = step;
          });
          return nextState
        case RECEIVE_STEP:
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