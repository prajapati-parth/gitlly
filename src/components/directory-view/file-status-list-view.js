import React from 'react'

import './file-status-list-view.less'

const FileStatusListView = (props) => {
  return (
    <div className='fileStatusListViewContainer'>
      <ul>
        {
          props.fileList.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.path}</span>&nbsp;
                <span>{item.gitStatus}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FileStatusListView