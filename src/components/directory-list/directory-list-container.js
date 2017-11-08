import React, { Component } from 'react'
import { remote } from 'electron'
import { connect } from 'react-redux'

import DirectoryList from './directory-list'

import * as Selectors from '../../store/reducers/directory-view'
import * as DirViewActions from '../../store/actions/directory-view'

import ElectronHelper from '../../utils/electron-helper'

const { Menu, MenuItem } = remote

class DirectoryListContainer extends Component {
  constructor() {
    super()

    this.handleListItemClicked = this._handleListItemClicked.bind(this)
    this.handleShowContextMenu = this._handleShowContextMenu.bind(this)
  }

  render() {
    return (
      <DirectoryList
        dirs={this.props.openDirectoryList}
        listItemClicked={this.handleListItemClicked}
        showContextMenu={this.handleShowContextMenu} />
    )
  }

  _handleListItemClicked(directoryPath) {
    const { dispatch } = this.props

    // update unicornDirectory
    dispatch(
      DirViewActions.updateUnicornDirectory(directoryPath)
    )

    // update open directory file status
    dispatch(
      DirViewActions.updateOpenDirectoryFileStatus(directoryPath)
    )
  }

  _handleShowContextMenu(repoDir) {
    const menu = new Menu()
    menu.append(new MenuItem(
      {
        label: 'Open Containing Folder',
        click: () => { ElectronHelper.openItem(repoDir) }
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
    const {dispatch, openDirectoryList} = this.props
    let currentDirIndex = openDirectoryList.indexof(dirPath)
    
    // remove from opened directories list
    dispatch(
      DirViewActions.removeFromOpenDirectoryList(dirPath)
    )

    // change unicornDirectory and openDirectoryFileStatus list
    let newUnicornDirectory = openDirectoryList[currentDirIndex-1] || openDirectoryList[currentDirIndex]
    if(newUnicornDirectory) {
      dispatch(
        DirViewActions.updateOpenDirectoryFileStatus(newUnicornDirectory)
      )

      dispatch(
        DirViewActions.updateUnicornDirectory(newUnicornDirectory)
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    openDirectoryList: Selectors.getOpenDirectoryList(state)
  }
}

export default connect(mapStateToProps)(DirectoryListContainer)