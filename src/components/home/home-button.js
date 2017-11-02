import React from 'react'
import Octicons from 'octicons'
import '../../../node_modules/octicons/build/build.css'

import './home-button.less'

const HomeButton = (props) => {
  return (
    <div className='homeButtonContainer' onClick={() => props.buttonClicked()}>
      <span className='homeButtonIcon' dangerouslySetInnerHTML={{ __html: Octicons[props.iconName].toSVG({'width': 20, 'height': 20}) }} />
      <span className='homeButtonContent'>{props.buttonName}</span>
    </div>
  )
}

export default HomeButton