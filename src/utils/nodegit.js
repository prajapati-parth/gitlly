import nodegit from 'nodegit'

export default {
  async getStatus(dirPath) {
    let repo
    try {
      repo = await nodegit.Repository.open(dirPath)
      
      return await repo.getStatus()
    } catch (e) {
      console.log('Error occured while getting repo status: ' + e)
    } finally {
      console.log('getStatus(): repo free')
      // failing to close the repo will result in memory leak
      repo.free()
    }
  },

  async getBranch(dirPath) {
    let repo
    try {
      repo = await nodegit.Repository.open(dirPath)
      return await repo.getCurrentBranch()
    } catch (e) {
      console.log('Error occured while getting repo branch: ' + e)
      console.log(e)
    } finally {
      console.log('getBranch(): repo free')
      repo.free()
    }
  }
}