import * as ActionTypes from '../action-types/directory-view'
import StoreHelper from '../../utils/store-helper'

const initialState = {
  unicornDirectory: StoreHelper.getValue('unicornDirectory')
}

export default function reducer(state=initialState, action={}) {
  switch(action.type) {
    case ActionTypes.UPDATE_UNICORN_DIRECTORY:
      return Object.assign({}, state, {
        ...state,
        unicornDirectory: action.directory
      })
    default:
      return state
  }
}

// selectors
export const getUnicornDirectory = state => {
  return state.unicornDirectory ? state.unicornDirectory : initialState.unicornDirectory
}