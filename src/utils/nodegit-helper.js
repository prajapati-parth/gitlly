export default {
  getFileStatus(statusObj) {
    if(statusObj.isNew()) return 'U'
    if(statusObj.isModified()) return 'M'
    if(statusObj.isTypechange()) return 'T'
    if(statusObj.isRenamed()) return 'R'
    if(statusObj.isIgnored()) return 'I'
    if(statusObj.isDeleted()) return 'D'
  },

  getBranchShortName(branchLongName, separator) {
    return branchLongName.split(separator)[1]
  },

  getBranchListFromReference(referenceList) {
    let branchCategory = {
      local: [],
      remote: []
    }

    // iterate over the reference list
    for (let i = 0, referenceListLength = referenceList.length; i < referenceListLength; i++) {
      let referenceName = referenceList[i]
      if (referenceName.indexOf('/heads/') > -1) {
        branchCategory.local.push(this.getBranchShortName(referenceName, '/heads/'))
      } else if (referenceName.indexOf('/origin/') > -1 && referenceName.indexOf('HEAD') == -1) {
        branchCategory.remote.push(this.getBranchShortName(referenceName, '/origin/'))
      }
    }

    return branchCategory
  }
}