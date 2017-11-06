import * as ActionTypes from '../action-types/directory-view'
import StoreHelper from '../../utils/store-helper'

export const updateUnicornDirectory = directory => {
  // set opened directory in store so that it can be opened again on app relaunch
  StoreHelper.setValue('unicornDirectory', dirpath)

  // add to open directories
  StoreHelper.addOpenDirectory(dirpath)

  
  return {
    type: ActionTypes.UPDATE_UNICORN_DIRECTORY,
    directory
  }
}