import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home/home'
import DirView from '../view-dir/ViewDir'

class MainContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/dir-view' component={DirView} />
        <Route exact path='/home' component={Home} />
      </Switch>
    )
  }
}

export default MainContainer