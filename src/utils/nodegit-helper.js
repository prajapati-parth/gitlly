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
  },

  getBranchListFromReference(referenceList) {
    let branchList = []

    for (let i = 0, referenceListLength = referenceList.length; i < referenceListLength; i++) {
      let referenceName = referenceList[i]
      if (referenceName.indexOf('/origin') > -1 && referenceName.indexOf('HEAD') == -1) {
        branchList.push(this.getBranchShortName(referenceName))
      }
    }

    return branchList
  }
}