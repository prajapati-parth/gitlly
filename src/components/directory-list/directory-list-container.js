import React, { Component } from 'react'
import { remote, shell } from 'electron'

import DirectoryList from './directory-list'
import StoreHelper from '../../utils/store-helper'

const { Menu, MenuItem } = remote

class DirectoryListContainer extends Component {
  constructor() {
    super()

    this.handleListItemClicked = this._handleListItemClicked.bind(this)
  }

  render() {
    const dirs = StoreHelper.getValue('openDirList')
    return (
      <DirectoryList
        dirs={dirs}
        listItemClicked={this.handleListItemClicked} />
    )
  }

  _handleListItemClicked(repoDir) {
    const menu = new Menu()
    menu.append(new MenuItem(
      {
        label: 'Open Containing Folder',
        click: () => { this._openRepoDirectory(repoDir) }
      }
    ))
    menu.append(new MenuItem({type: 'separator'}))
    menu.append(new MenuItem(
      {
        label: 'Remove Repository from List',
        click: () => { this._removeRepofromDirList(repoDir) }
      }
    ))
    menu.popup(remote.getCurrentWindow())
  }

  _removeRepofromDirList(dirPath) {
    // remove from opened directories list
    StoreHelper.removeFromOpenDirectory(dirPath)
  }

  _openRepoDirectory(dirPath) {
    shell.openItem(dirPath)
  }
}

export default DirectoryListContainer