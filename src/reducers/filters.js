const initialState = {
  current: true,
  previous: true,
  future: true,
}

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