import React, { Component } from 'react'
import { remote } from 'electron'

import HomeButton from './home-button'
import './home-container.less'

import AppCopy from '../../utils/app-copy-text'
import StoreHelper from '../../utils/store-helper'
import ElectronHelper from '../../utils/electron-helper'

class HomeContainer extends Component {
  constructor() {
    super()

    this.handleCreateButtonClick = this._handleCreateButtonClick.bind(this)
    this.handleOpenButtonClick = this._handleOpenButtonClick.bind(this)
    this.handleCloneButtonClick = this._handleCloneButtonClick.bind(this)
    this.directorySelected = this._directorySelected.bind(this)
  }

  render() {
    return (
      <div className='homeContainer'>
        <HomeButton buttonName={AppCopy.homeNewRepoButtonText} iconName='Plus' buttonClicked={this.handleCreateButtonClick} />
        <HomeButton buttonName={AppCopy.homeOpenRepoButtonText} iconName='Folder' buttonClicked={this.handleOpenButtonClick} />
        <HomeButton buttonName={AppCopy.homeCloneRepoButtonText} iconName='Book' buttonClicked={this.handleCloneButtonClick} />
      </div>
    )
  }

  _handleCreateButtonClick() {
    console.log('new repo clicked')
  }

  _handleOpenButtonClick() {
    ElectronHelper.openSelectDirectoryDialog(this.directorySelected)
  }

  _handleCloneButtonClick() {
    console.log('clone repo clicked')
  }

  _directorySelected(dirpath) {
    // call props method to change view to directory-view
    this.props.directorySelected(dirpath)
  }
}

export default HomeContainer