import nodegit from 'nodegit'

export default {
  async getStatus(dirPath) {
    let repo = await nodegit.Repository.open(dirPath)
      
    return await repo.getStatus()
  }
}