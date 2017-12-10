import React from 'react'
import {ThumbsUp} from 'react-feather'

import AppCopy from '../../../utils/app-copy-text'
import './NoChanges.less'

const NoChanges = () => {
  return (
    <div className="noChangesContainer">
      <span className="noChangesIcon">
        <ThumbsUp />
      </span>
      <span className="noChangesText">{AppCopy.noChangesDirectoryViewText}</span>
    </div>
  )
}

export default NoChanges