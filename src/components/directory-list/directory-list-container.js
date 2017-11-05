import React, { Component } from 'react'
import { remote } from 'electron'

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

  _handleListItemClicked(repoName) {
    const menu = new Menu()
    menu.append(new MenuItem(
      {
        label: 'Remove repo from list',
        click: () => { console.log('remove repo clicked') }
      }
    ))
    menu.popup(remote.getCurrentWindow())
  }
}

export default DirectoryListContainer