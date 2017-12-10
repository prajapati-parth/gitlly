import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter } from 'react-router-dom'

import * as reducers from './store/reducer'

let store = createStore(combineReducers(reducers), applyMiddleware(thunk))

import App from './components/App'

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'))