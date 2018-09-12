import { remote, shell } from 'electron';

import copy from './copy';

export default {
  openSelectDirectoryDialog(callback) {
    // configure options for opening native dialog to select directory
    let openDialogOptions = {
      title: copy.directorySelectDialogTitle,
      properties: ['openDirectory']
    }

    // open native dialog
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), openDialogOptions, (filePaths) => callback(filePaths[0]))
  },

  openItem(dirPath) {
    shell.openItem(dirPath)
  }
}