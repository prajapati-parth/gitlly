import { remote, shell } from 'electron'

import AppCopy from './app-copy-text'

export default {
  openSelectDirectoryDialog(callback) {
    // configure options for opening native dialog to select directory
    let openDialogOptions = {
      title: AppCopy.directorySelectDialogTitle,
      properties: ['openDirectory']
    }

    // open native dialog
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), openDialogOptions, (filePaths) => callback(filePaths[0]))
  },

  openItem(dirPath) {
    shell.openItem(dirPath)
  }
}