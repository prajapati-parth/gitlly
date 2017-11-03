import React, { Component } from 'react'

import HomeContainer from './home/home-container'
import DirectoryViewContainer from './directory-view/directory-view-container'
import StoreHelper from '../utils/store-helper'

class App extends Component {
  constructor() {
    super()

    this.state = {
      unicornDirectory: StoreHelper.getValue('unicornDirectory')
    }

    this.handleDirectorySelect = this._handleDirectorySelect.bind(this)
  }

  render() {
    return (
      this.state.unicornDirectory
        ? <DirectoryViewContainer unicornDirectory={this.state.unicornDirectory} />
        : <HomeContainer directorySelected={this.handleDirectorySelect} />
    ) 
  }

  _handleDirectorySelect(dirPath) {
    this.setState({
      unicornDirectory: dirPath
    })
  }
}

export default App