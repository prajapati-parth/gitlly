import nodegit from 'nodegit'

export default {
  openRepo(dirPath) {
    nodegit.Repository.open(dirPath)
      .then((repo) => {
        return repo
      })
  }
}