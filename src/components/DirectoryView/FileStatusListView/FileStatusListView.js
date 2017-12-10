import React from 'react'
import {MoreVertical} from 'react-feather'

import NoChanges from '../NoChanges'
import BottomBarContainer from '../BottomBar'
import './FileStatusListView.less'

const FileStatusListView = (props) => {
  const {fileList} = props
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
      <BottomBarContainer />
    </div>
  )
}

export default FileStatusListView