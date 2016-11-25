import {states} from '../courses'

const initialState = {}
initialState[states.OFFERED] = true
initialState[states.PREVIOUS] = true
initialState[states.FUTURE] = true

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_FILTER':
      const newState = Object.assign({}, state)
      newState[action.id] = !newState[action.id]
      return newState
    default:
      return state
  }
}