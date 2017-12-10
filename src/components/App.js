import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import DirectoryViewContainer from './DirectoryView'

import * as Selectors from '../store/reducers/directory-view'
import * as DirViewActions from '../store/actions/directory-view'

class App extends Component {
  constructor() {
    super()

    this.handleDirectorySelect = this._handleDirectorySelect.bind(this)
  }

  render() {
    return (
      this.props.openDirList.length
        ? <DirectoryViewContainer unicornDirectory={this.props.unicornDirectory} />
        : <Home directorySelected={this.handleDirectorySelect} />
    ) 
  }

  _handleDirectorySelect(dirPath) {
    const {dispatch} = this.props

    // update the current open directory
    dispatch(
      DirViewActions.updateUnicornDirectory(dirPath)
    )

    // add the selected directory to open directories list
    dispatch(
      DirViewActions.addToOpenDirectoryList(dirPath)
    )

    // update directory view details
    dispatch(
      DirViewActions.updateDirectoryViewDetails(dirPath)
    )
  }
}

function mapStatetoProps(state) {
  return {
    unicornDirectory: Selectors.getUnicornDirectory(state),
    openDirList: Selectors.getOpenDirectoryList(state)
  }
}

export default connect(mapStatetoProps)(App)