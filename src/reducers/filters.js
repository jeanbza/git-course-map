import states from '../constants/states'

const initialState = {}
initialState[states.CURRENT] = true
initialState[states.PREVIOUS] = false
initialState[states.FUTURE] = false

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