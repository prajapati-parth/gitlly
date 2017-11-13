import React, { Component } from 'react'
import { remote } from 'electron'
import { connect } from 'react-redux'

import DirectoryList from './directory-list'
import Git from '../../utils/nodegit'

import * as Selectors from '../../store/reducers/directory-view'
import * as DirViewActions from '../../store/actions/directory-view'

import ElectronHelper from '../../utils/electron-helper'
import Utils from '../../utils/utils'

const { Menu, MenuItem } = remote

class DirectoryListContainer extends Component {
  constructor() {
    super()

    this.handleListItemClicked = this._handleListItemClicked.bind(this)
    this.handleShowContextMenu = this._handleShowContextMenu.bind(this)
  }

  componentDidMount() {
    const {dispatch, unicornDirectory} = this.props

    dispatch(
      DirViewActions.updateModifiedFilesCount(unicornDirectory)
    )
  }

  render() {
    const {openDirectoryList, unicornDirectory, modifiedFilesCount} = this.props
    return (
      <DirectoryList
        dirs={openDirectoryList}
        listItemClicked={this.handleListItemClicked}
        showContextMenu={this.handleShowContextMenu}
        selectedDirectory={unicornDirectory}
        modifiedFilesCount={modifiedFilesCount} />
    )
  }

  _handleListItemClicked(directoryPath) {
    const { dispatch } = this.props

    // update unicornDirectory
    dispatch(
      DirViewActions.updateUnicornDirectory(directoryPath)
    )

    dispatch(
      DirViewActions.updateDirectoryViewDetails(directoryPath)
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
    const {dispatch, openDirectoryList, unicornDirectory} = this.props
    let currentDirIndex = openDirectoryList.indexOf(dirPath)
    
    // remove from opened directories list
    dispatch(
      DirViewActions.removeFromOpenDirectoryList(dirPath)
    )

    // update unicornDirectory and openDirectoryFileStatus if unicornDirectory is removed
    if (dirPath === unicornDirectory) {
      let newUnicornDirectory = Utils.getNewUnicornDirectory(dirPath, openDirectoryList)

      if (newUnicornDirectory) {
        dispatch(
          DirViewActions.updateDirectoryViewDetails(newUnicornDirectory)
        )

        dispatch(
          DirViewActions.updateUnicornDirectory(newUnicornDirectory)
        )
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    openDirectoryList: Selectors.getOpenDirectoryList(state),
    unicornDirectory: Selectors.getUnicornDirectory(state),
    modifiedFilesCount: Selectors.getModifiedFilesCount(state)
  }
}

export default connect(mapStateToProps)(DirectoryListContainer)