import * as ActionTypes from '../action-types/directory-view'
import StoreHelper from '../../utils/store-helper'

const initialState = {
  unicornDirectory: StoreHelper.getValue('unicornDirectory'),
  openDirectoryList: StoreHelper.getValue('openDirList')
}

export default function reducer(state=initialState, action={}) {
  switch(action.type) {
    case ActionTypes.UPDATE_UNICORN_DIRECTORY:
      return Object.assign({}, state, {
        ...state.DirectoryView,
        unicornDirectory: action.directory
      })
    case ActionTypes.UPDATE_OPEN_DIRECTORY:
      return Object.assign({}, state, {
        ...state.DirectoryView,
        openDirectoryList: action.dirList
      })
    default:
      return state
  }
}

// selectors
export const getUnicornDirectory = state => {
  return state.DirectoryView.unicornDirectory ? state.DirectoryView.unicornDirectory : initialState.unicornDirectory
}

export const getOpenDirectoryList = state => {
  return state.DirectoryView.openDirectoryList ? state.DirectoryView.openDirectoryList : initialState.openDirectoryList
}