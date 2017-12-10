export default {
  getProjectNameFromDirPath(dirPath) {
    return dirPath.substring(dirPath.lastIndexOf('/') + 1, dirPath.length)
  },

  getNewUnicornDirectory(subjectDirectory, directoryList) {
    let subjectDirectoryIndex = directoryList.indexOf(subjectDirectory),
      directoryListLength = directoryList.length

    // if only one item in directory list, return '' as the single item will be removed
    if (directoryListLength == 1) {
      return ''
    } else {
      // if directory at index 0 is removed, directory at index 1 is new unicornDirectory
      if (subjectDirectoryIndex == 0) {
        return directoryList[1]
      } else if (subjectDirectoryIndex == (directoryListLength - 1) ) { 
        // if directory at last index is removed, return last second element
        return directoryList[directoryListLength - 2] 
      } else {
        // if any directory that is not first or last is removed, return directory before it
        return directoryList[subjectDirectoryIndex - 1]
      }
    }
  }
}