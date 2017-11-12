export default {
  getFileStatus(statusObj) {
    if(statusObj.isNew()) return 'U'
    if(statusObj.isModified()) return 'M'
    if(statusObj.isTypechange()) return 'T'
    if(statusObj.isRenamed()) return 'R'
    if(statusObj.isIgnored()) return 'I'
    if(statusObj.isDeleted()) return 'D'
  },

  getBranchShortName(branchLongName) {
    return branchLongName.substring(branchLongName.lastIndexOf('/') + 1, branchLongName.length)
  }
}