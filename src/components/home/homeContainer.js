import React, { Component } from 'react'

import HomeButton from './homeButton'
import './homeContainer.less'

class HomeContainer extends Component {
  render() {
    return (
      <div className='homeContainer'>
        <HomeButton buttonName='Create new repository' />
        <HomeButton buttonName='Open local repository' />
        <HomeButton buttonName='Clone remote repository' />
      </div>
    )
  }
}

export default HomeContainer