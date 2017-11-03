export default {
  getProjectNameFromDirPath(dirPath) {
    return dirPath.substring(dirPath.lastIndexOf('/') + 1, dirPath.length)
  }
}