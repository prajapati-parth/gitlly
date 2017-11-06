import * as ActionTypes from '../action-types/directory-view'
import StoreHelper from '../../utils/store-helper'

export const updateUnicornDirectory = directory => {
  // set opened directory in store so that it can be opened again on app relaunch
  StoreHelper.setValue('unicornDirectory', directory)

  // add to open directories
  // TODO: implement the logic to select last open directory here(case: when @param: directory is '')
  StoreHelper.addOpenDirectory(directory)
  
  return {
    type: ActionTypes.UPDATE_UNICORN_DIRECTORY,
    directory
  }
}

export const addToOpenDirectoryList = directory => {
  // update the new directory to electron store
  let updatedDirList = StoreHelper.addOpenDirectory(directory)

  return {
    type: ActionTypes.UPDATE_OPEN_DIRECTORY,
    dirList: updatedDirList
  }
}

export const removeFromOpenDirectoryList = directory => {
  let updatedDirList = StoreHelper.removeFromOpenDirectory(directory)

  return {
    type: ActionTypes.UPDATE_OPEN_DIRECTORY,
    dirList: updatedDirList
  }
}