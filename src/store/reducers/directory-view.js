import * as ActionTypes from '../action-types/directory-view'
import StoreHelper from '../../utils/store-helper'

const initialState = {
  unicornDirectory: StoreHelper.getValue('unicornDirectory'),
  openDirectoryList: StoreHelper.getValue('openDirList'),
  openDirectoryFileStatus: [],
  modifiedFilesCount: 0,
  branchName: ''
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
    case ActionTypes.UPDATE_DIRECTORY_FILE_STATUS:
      return Object.assign({}, state, {
        ...state.DirectoryView,
        openDirectoryFileStatus: action.fileStatusList
      })
    case ActionTypes.UPDATE_MODIFIED_FILES_COUNT:
      return Object.assign({}, state, {
        ...state.DirectoryView,
        modifiedFilesCount: action.fileCount
      })
    case ActionTypes.UPDATE_BRANCH_NAME:
      return Object.assign({}, state, {
        ...state.DirectoryView,
        branchName: action.branchName
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

export const getOpenDirectoryFileStatusList = state => {
  return state.DirectoryView.openDirectoryFileStatus ? state.DirectoryView.openDirectoryFileStatus : initialState.openDirectoryFileStatus
}

export const getModifiedFilesCount = state => {
  return state.DirectoryView.modifiedFilesCount ? state.DirectoryView.modifiedFilesCount : initialState.modifiedFilesCount
}

export const getBranchName = state => {
  return state.DirectoryView.branchName ? state.DirectoryView.branchName : initialState.branchName
}