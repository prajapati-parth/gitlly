import React from 'react'
import * as Icons from 'react-feather'

import './HomeButton.less'

const HomeButton = (props) => {
  return (
    <div className='homeButtonContainer' onClick={() => props.buttonClicked()}>
      {
        React.createElement(Icons[props.iconName])
      }
      <span className='homeButtonContent'>{props.buttonName}</span>
    </div>
  )
}

export default HomeButton