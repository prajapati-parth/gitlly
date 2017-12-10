import React, { Component } from 'react'
import { connect } from 'react-redux'

import BrandButton from './BrandButton'
import NewOption from './NewOption'
import './HeaderContainer.less'

import * as HeaderSelectors from '../../../store/reducers/header'
import * as HeaderActions from '../../../store/actions/header'
import * as DirViewActions from '../../../store/actions/directory-view'

import StoreHelper from '../../../utils/store-helper'
import ElectronHelper from '../../../utils/electron-helper'

class HeaderContainer extends Component {
  constructor() {
    super()

    this.handleAddRepoClick = this._handleAddRepoClick.bind(this)
    this.handleOpenRepoClick = this._handleOpenRepoClick.bind(this)
    this.handleCloneRepoClick = this._handleCloneRepoClick.bind(this)
    this.directorySelected = this._handleDirectorySelect.bind(this)
  }
  render() {
    return (
      <div className='headerContainer'>
        <BrandButton />
        <div className="newOptionContainer">
          <NewOption icon='Plus' onOptionClick={this.handleAddRepoClick} />
          <NewOption icon='Folder' onOptionClick={this.handleOpenRepoClick} />
          <NewOption icon='Book' onOptionClick={this.handleCloneRepoClick} />
        </div>
      </div>
    )
  }

  _handleAddRepoClick() {
    console.log('add repo')
  }

  _handleOpenRepoClick() {
    ElectronHelper.openSelectDirectoryDialog(this.directorySelected)
  }

  _handleCloneRepoClick() {
    console.log('clone repo')
  }

  _handleDirectorySelect(dir) {
    const {dispatch} = this.props
    dispatch(
      DirViewActions.addToOpenDirectoryList(dir)
    )

    dispatch(
      DirViewActions.updateUnicornDirectory(dir)
    )

    dispatch(
      DirViewActions.updateDirectoryViewDetails(dir)
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(HeaderContainer)