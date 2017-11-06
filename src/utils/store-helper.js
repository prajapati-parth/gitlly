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

    if (openDirs.indexOf(dir) === -1) {
      openDirs.push(dir)
      store.set(openDirListKey, openDirs)
    }

    return openDirs
  },

  removeFromOpenDirectory(dir) {
    let openDirListKey = 'openDirList',
      openDirs = store.get(openDirListKey) || [],
      dirIndex = openDirs.indexOf(dir)
    
    if (dirIndex > -1) {
      openDirs.splice(dirIndex, 1)
      store.set(openDirListKey, openDirs)
    }

    return openDirs
  }
}