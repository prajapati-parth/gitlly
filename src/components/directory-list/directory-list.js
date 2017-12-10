import React from 'react'
import {Book} from 'react-feather'

import './directory-list.less'
import Utils from '../../utils/utils'

const DirectoryList = (props) => {
  const {dirs, selectedDirectory, showContextMenu, listItemClicked, modifiedFilesCount} = props
  return (
    <div className='directoryListContainer'>
      {
        dirs && dirs.map((item, index) => {
          return (
            <div
              key={index}
              title={item}
              className={`directoryListItem ${item === selectedDirectory ? 'unicornDirectory' : ''}`}
              onContextMenu={() => showContextMenu(item)}
              onClick={() => listItemClicked(item)} >
              <Book />
              <span className='directoryName'>{Utils.getProjectNameFromDirPath(item)}</span>
              {
                item === selectedDirectory
                  && <span className='directoryListItemCount'>{modifiedFilesCount}</span>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default DirectoryList