import * as ActionTypes from '../action-types/directory-view'

import StoreHelper from '../../utils/store-helper'
import Git from '../../utils/nodegit'
import GitHelper from '../../utils/nodegit-helper'

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

export const updateOpenDirectoryFileStatus = directory => {
  return dispatch => {
    // TODO: Handle condition when a non-git directory is selected(do a catch block for "then")
    Git.getStatus(directory).then(statusList => {
      let fileList = []

      for (let i=0, totalFiles = statusList.length; i<totalFiles; i++) {
        let fileListObj = {
          path: statusList[i].path(),
          gitStatus: GitHelper.getFileStatus(statusList[i])
        }

        fileList.push(fileListObj)
      }

      dispatch({
        type: ActionTypes.UPDATE_DIRECTORY_FILE_STATUS,
        fileStatusList: fileList
      })
    }) 
  }
}

export const clearOpenDirectoryFileStatus = () => {
  return {
    type: ActionTypes.UPDATE_DIRECTORY_FILE_STATUS,
    fileStatusList: []
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

export const updateModifiedFilesCount = directory => {
  return dispatch => {
    Git.getStatus(directory).then(statusList => {
      dispatch({
        type: ActionTypes.UPDATE_MODIFIED_FILES_COUNT,
        fileCount: statusList.length
      })
    })
  }
}

export const updateBranchName = directory => {
  return dispatch => {
    Git.getBranch(directory).then(branchName => {
      dispatch({
        type: ActionTypes.UPDATE_BRANCH_NAME,
        branchName: GitHelper.getBranchShortName(branchName.toString())
      })
    })
  }
}

export const updateDirectoryViewDetails = directory => {
  return dispatch => {
    Git.getRepoBranchAndStatus(directory).then(repoData => {
      let fileList = []
      
      for (let i=0, totalFiles = repoData.status.length; i<totalFiles; i++) {
        let fileListObj = {
          path: repoData.status[i].path(),
          gitStatus: GitHelper.getFileStatus(repoData.status[i])
        }

        fileList.push(fileListObj)
      }

      dispatch({
        type: ActionTypes.UPDATE_DIRECTORY_VIEW,
        fileList,
        branchName: GitHelper.getBranchShortName(repoData.branchName.toString()),
        branchList: GitHelper.getBranchListFromReference(repoData.referenceList)
      })
    })
  }
}