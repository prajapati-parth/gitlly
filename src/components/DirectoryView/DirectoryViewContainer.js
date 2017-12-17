import React, { Component } from 'react'
import { connect } from 'react-redux'

import FileStatusListView from './FileStatusListView'
import Header from './Header'
import Sidebar from '../Sidebar'

import './DirectoryViewContainer.less'

import * as DirectoryViewActions from '../../store/actions/directory-view'
import * as DirectoryViewSelectors from '../../store/reducers/directory-view'

class DirectoryViewContainer extends Component {
  componentWillMount() {
    const {dispatch, unicornDirectory} = this.props

    if (unicornDirectory) {
      dispatch(
        DirectoryViewActions.updateDirectoryViewDetails(unicornDirectory)
      )
    }
  }

  render() {
    const {fileList} = this.props
    return (
      <div className='directoryViewContainer'>
        <div>
          <Header />
        </div>
        <div className='bodyContainer'>
          <Sidebar />
          <FileStatusListView
            fileList={fileList} />
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