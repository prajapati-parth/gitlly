import React, { Component } from 'react'
import { connect } from 'react-redux'

import FileStatusListView from './file-status-list-view'
import HeaderContainer from '../header/header-container'
import Sidebar from '../sidebar/sidebar-container'

import './directory-view-container.less'

import * as DirectoryViewActions from '../../store/actions/directory-view'
import * as DirectoryViewSelectors from '../../store/reducers/directory-view'

import Git from '../../utils/nodegit'
import GitHelper from '../../utils/nodegit-helper'

class DirectoryViewContainer extends Component {
  // componentWillMount() {
  //   const {dispatch, unicornDirectory, }
  //   this.props.unicornDirectory && DirectoryViewActions.updateOpenDirectoryFileStatus()
  // }

  render() {
    return (
      <div className='directoryViewContainer'>
        <div>
          <HeaderContainer />
        </div>
        <div className='bodyContainer'>
          <Sidebar />
          <FileStatusListView fileList={this.props.fileList} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    unicornDirectory: DirectoryViewSelectors.getUnicornDirectory(state),
    fileList: DirectoryViewSelectors.getOpenDirectoryFileStatusList(state)
  }
}

export default connect(mapStateToProps)(DirectoryViewContainer)