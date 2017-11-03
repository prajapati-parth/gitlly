import React, { Component } from 'react'

import DirectoryList from './directory-list'

import StoreHelper from '../../utils/store-helper'

class DirectoryListContainer extends Component {
  render() {
    const dirs = StoreHelper.getValue('openDirList')
    return (
      <DirectoryList dirs={dirs} />
    )
  }
}

export default DirectoryListContainer