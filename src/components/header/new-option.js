import React from 'react'
import Octicons from 'octicons'

import '../../../node_modules/octicons/build/build.css'
import './new-options.less'

const NewOption = props => {
  return (
    <div className="newOptionItem" onClick={() => props.onOptionClick()}>
      <span dangerouslySetInnerHTML={{ __html: Octicons[props.icon].toSVG({'width': 20, 'height': 20}) }} />
    </div>
  )
}

export default NewOption