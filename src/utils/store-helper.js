import Store from 'electron-store'

const store = new Store()

export default {
  getValue(key) {
    return store.get(key)
  },

  setValue(key, value) {
    store.set(key, value)
  },

  addOpenDirectory(dir) {
    let openDirListKey = 'openDirList',
      openDirs = store.get(openDirListKey) || []

    openDirs.push(dir)

    store.set(openDirListKey, openDirs)
  }
}