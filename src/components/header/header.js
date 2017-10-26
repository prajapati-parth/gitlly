import React from 'react'

import DirectorySelectButton from './directorySelectButton'
import './header.less'
import Git from '../../utils/nodegit'

const Header = () => {
  const handleDirSelect = (path) => {
    console.log(Git.openRepo(path))
  }

  return (
    <div className='header'>
      <DirectorySelectButton
        directorySelected={(path) => handleDirSelect(path)} />
    </div>
  )
}

export default Header