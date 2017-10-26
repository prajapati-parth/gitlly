import React from 'react'
import {remote} from 'electron'

import dirIcon from '../../assets/icons/dir.svg'
import './directorySelectButton.less'

const DirectorySelectButton = (props) => {
  const buttonClick = () => {
    let openDialogOptions = {
      properties: ['openDirectory']
    }
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), openDialogOptions, (filePaths) => props.directorySelected(filePaths[0]))
  }

  return (
    <button className='glButton' title='open directory' onClick={() => buttonClick()}>
      <img src={dirIcon} alt="open dir" />
    </button>
  )
}

export default DirectorySelectButton