import nodegit from 'nodegit'

export default {
  async getStatus(dirPath) {
    let repo
    try {
      repo = await nodegit.Repository.open(dirPath)
      
      return await repo.getStatus()
    } catch(e) {
      console.log('Error occured while opening repo' + e)
    } finally {
      console.log('repo free')
      // failing to close the repo will result in excessive memory consumption
      repo.free()
    }
  }
}