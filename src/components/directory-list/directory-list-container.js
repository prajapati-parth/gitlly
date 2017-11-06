import React, { Component } from 'react'
import { remote, shell } from 'electron'
import { connect } from 'react-redux'

import DirectoryList from './directory-list'

import * as Selectors from '../../store/reducers/directory-view'
import * as DirViewActions from '../../store/actions/directory-view'

const { Menu, MenuItem } = remote

class DirectoryListContainer extends Component {
  constructor() {
    super()

    this.handleListItemClicked = this._handleListItemClicked.bind(this)
  }

  render() {
    return (
      <DirectoryList
        dirs={this.props.openDirectoryList}
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
    // StoreHelper.removeFromOpenDirectory(dirPath)
    this.props.dispatch(
      DirViewActions.removeFromOpenDirectoryList(dirPath)
    )
  }

  _openRepoDirectory(dirPath) {
    shell.openItem(dirPath)
  }
}

function mapStateToProps(state) {
  return {
    openDirectoryList: Selectors.getOpenDirectoryList(state)
  }
}

export default connect(mapStateToProps)(DirectoryListContainer)