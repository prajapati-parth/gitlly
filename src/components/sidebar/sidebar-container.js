import React from 'react'

import DirectoryListContainer from '../directory-list/directory-list-container'
import './sidebar-container.less'

const SidebarContainer = () => {
  return (
    <div className='sidebarContainer'>
      <DirectoryListContainer />
    </div>
  )
}

export default SidebarContainer