import React from 'react'

import Utils from '../../utils/utils'

const DirectoryList = (props) => {
  return (
    <div className='directoryListContainer'>
      {
        props.dirs && props.dirs.map((item, index) => {
          return (
            <div key={index} title={item}>
              <span>{Utils.getProjectNameFromDirPath(item)}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default DirectoryList