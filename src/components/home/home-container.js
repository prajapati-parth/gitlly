import React, { Component } from 'react'
import { remote } from 'electron'
import Store from 'electron-store'

import HomeButton from './home-button'
import './home-container.less'
import AppCopy from '../../utils/app-copy-text'

const store = new Store()

class HomeContainer extends Component {
  constructor() {
    super()

    this.handleCreateButtonClick = this._handleCreateButtonClick.bind(this)
    this.handleOpenButtonClick = this._handleOpenButtonClick.bind(this)
    this.handleCloneButtonClick = this._handleCloneButtonClick.bind(this)
  }

  render() {
    return (
      <div className='homeContainer'>
        <HomeButton buttonName={AppCopy.homeNewRepoButtonText} iconName='plus' buttonClicked={this.handleCreateButtonClick} />
        <HomeButton buttonName={AppCopy.homeOpenRepoButtonText} iconName='file-directory' buttonClicked={this.handleOpenButtonClick} />
        <HomeButton buttonName={AppCopy.homeCloneRepoButtonText} iconName='repo' buttonClicked={this.handleCloneButtonClick} />
      </div>
    )
  }

  _handleCreateButtonClick() {
    console.log('new repo clicked')
  }

  _handleOpenButtonClick() {
    // configure options for opening native dialog to select directory
    let openDialogOptions = {
      properties: ['openDirectory']
    }

    // open native dialog
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), openDialogOptions, (filePaths) => this.directorySelected(filePaths[0]))
  }

  _handleCloneButtonClick() {
    console.log('clone repo clicked')
  }

  directorySelected(dirpath) {
    // set opened directory in store so that it can be opened again on app relaunch
    store.set('unicornDirectory', dirpath)
  }
}

export default HomeContainer