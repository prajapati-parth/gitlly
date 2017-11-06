import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import * as reducers from './store/reducer'

let store = createStore(combineReducers(reducers))

import App from './components/App'

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'))