import React from 'react'
import {MoreVertical} from 'react-feather'

import NoChanges from './no-changes'
import BottomBarContainer from '../bottom-bar/bottom-bar-container'
import './file-status-list-view.less'

const FileStatusListView = (props) => {
  const {fileList, branchName} = props
  return (
    <div className='fileStatusListViewContainer'>
      {
        fileList.length
          ? (
              <div className="filesListContainer">
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
              </div>
            )
          : <NoChanges />
      }
      <BottomBarContainer branchName={branchName} />
    </div>
  )
}

export default FileStatusListView