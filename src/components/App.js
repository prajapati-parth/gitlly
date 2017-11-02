import React, { Component } from 'react'
import Store from 'electron-store'

import HomeContainer from './home/homeContainer'

const store = new Store()

const App = () => {
  return (
    store.get('unicornDirectory') ? <span>Directory View Comming soon</span> : <HomeContainer />
  )
}

export default App