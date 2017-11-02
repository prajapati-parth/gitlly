import React, { Component } from 'react'
import Store from 'electron-store'

import HomeContainer from './home/home-container'
import DirectoryViewContainer from './directory-view/directory-view-container'

const store = new Store()

const App = () => {
  const unicornDirectory = store.get('unicornDirectory')
  return (
    unicornDirectory ? <DirectoryViewContainer unicornDirectory={unicornDirectory} /> : <HomeContainer />
  )
}

export default App