import React, { Component } from 'react'
import { remote } from 'electron'

import HomeButton from './home-button'
import './home-container.less'

import AppCopy from '../../utils/app-copy-text'
import StoreHelper from '../../utils/store-helper'

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
    StoreHelper.setValue('unicornDirectory', dirpath)

    // add to open directories
    StoreHelper.addOpenDirectory(dirpath)

    // call props method to change view to directory-view
    this.props.directorySelected(dirpath)
  }
}

export default HomeContainer