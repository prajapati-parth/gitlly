import React from 'react'
import * as Icons from 'react-feather'

import './NewOption.less'

const NewOption = props => {
  return (
    <div className="newOptionItem" onClick={() => props.onOptionClick()}>
      {
        React.createElement(Icons[props.icon])
      }
    </div>
  )
}

export default NewOption