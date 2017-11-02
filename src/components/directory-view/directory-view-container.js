import React, { Component } from 'react'

import FileStatusListView from './file-status-list-view'
import HeaderContainer from '../header/header-container'
import Git from '../../utils/nodegit'
import GitHelper from '../../utils/nodegit-helper'

class DirectoryViewContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      directoryStatus: this.getDirectoryStatus(props.unicornDirectory) || []
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <FileStatusListView fileList={this.state.directoryStatus} />
      </div>
    )
  }

  getDirectoryStatus(dirpath) {
    // TODO: Handle condition when a non-git directory is selected(do a catch block for "then")
    Git.getStatus(dirpath).then(statusList => {
      let fileList = []

      for (let i=0, totalFiles = statusList.length; i<totalFiles; i++) {
        let fileListObj = {
          path: statusList[i].path(),
          gitStatus: GitHelper.getFileStatus(statusList[i])
        }

        fileList.push(fileListObj)
      }

      this.setState({
        directoryStatus: fileList
      })
    })
  }
}

export default DirectoryViewContainer