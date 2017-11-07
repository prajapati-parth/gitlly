import * as ActionTypes from '../action-types/header'

export const toggleNewOptionsVisibility = visibility => {
  return {
    type: ActionTypes.TOGGLE_NEW_OPTIONS,
    visibility
  }
}