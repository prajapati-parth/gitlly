import React, { Component } from 'react'
import Store from 'electron-store'

import BrandButton from './brand-button'
import './header-container.less'

const store = new Store()

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
    store.set('unicornDirectory', '')
  }
}

export default HeaderContainer