import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeContainer from './home/home-container'
import DirectoryViewContainer from './directory-view/directory-view-container'

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
        : <HomeContainer directorySelected={this.handleDirectorySelect} />
    ) 
  }

  _handleDirectorySelect(dirPath) {
    this.props.dispatch(
      DirViewActions.updateUnicornDirectory(dirPath)
    )

    this.props.dispatch(
      DirViewActions.addToOpenDirectoryList(dirPath)
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