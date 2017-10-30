import React from 'react'
import {remote} from 'electron'

import dirIcon from '../../assets/icons/dir.svg'
import './header.less'

const Header = (props) => {
  const handleDirSelect = (path) => {
    Git.getStatus(path).then(status => {
      
    })
  }

  const buttonClick = () => {
    let openDialogOptions = {
      properties: ['openDirectory']
    }
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), openDialogOptions, (filePaths) => props.directorySelect(filePaths[0]))
  }

  return (
    <div>
      <div className='header'>
        <button className='glButton' title='open directory' onClick={() => buttonClick()}>
          <img src={dirIcon} alt="open dir" />
        </button>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Header