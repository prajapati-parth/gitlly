import React from 'react'

import NoChanges from './no-changes'
import './file-status-list-view.less'

const FileStatusListView = (props) => {
  const {fileList} = props
  return (
    <div className='fileStatusListViewContainer'>
      {
        fileList.length
          ? (
              <ul>
                {
                  fileList.map((item, index) => {
                    return (
                      <li key={index}>
                        <span>{item.path}</span>&nbsp;
                        <span>{item.gitStatus}</span>
                      </li>
                    )
                  })
                }
              </ul>
            )
          : <NoChanges />
      }
    </div>
  )
}

export default FileStatusListView