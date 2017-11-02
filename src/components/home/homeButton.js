import React from 'react'
import Octicon from 'react-octicon'

import './homeButton.less'

const HomeButton = (props) => {
  return (
    <div className='homeButtonContainer'>
      <Octicon mega spin name='repo' /><span className='homeButtonContent'>{props.buttonName}</span>
    </div>
  )
}

export default HomeButton