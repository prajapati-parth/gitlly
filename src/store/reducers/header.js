import * as ActionTypes from '../action-types/header'

const initialState = {
  newOptionsVisible: false
}

export default function reducer(state=initialState, action={}) {
  switch(action.type) {
  case ActionTypes.TOGGLE_NEW_OPTIONS:
    return Object.assign({}, state, {
      ...state.Header,
      newOptionsVisible: action.visibility
    })
  default:
    return state
  }
}

// selectors
export const getNewOptionsVisibility = state => {
  return state.Header.newOptionsVisible ? state.Header.newOptionsVisible : initialState.newOptionsVisible
}