import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/steps_actions.js'

const initialState = {
  1: {
    id: 1,
    step: 1,
    body: "Smoek Weed",
    done: false
  },
  2: {
    id: 2,
    step: 2,
    body: "AWW YEAH",
    done: true
  }
};

const stepsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default stepsReducer