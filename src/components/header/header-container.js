import React, { Component } from 'react'

import BrandButton from './brand-button'
import './header-container.less'

import StoreHelper from '../../utils/store-helper'

class HeaderContainer extends Component {
  constructor() {
    super()

    this.handleBrandButtonClick = this._handleBrandButtonClick.bind(this)
  }
  render() {
    return (
      <div className='headerContainer'>
        <BrandButton onBrandClick={this.handleBrandButtonClick}/>
      </div>
    )
  }

  _handleBrandButtonClick() {
    console.log('clearing store')
    StoreHelper.setValue('unicornDirectory', '')
  }
}

export default HeaderContainer