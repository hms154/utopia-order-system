import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import './index.css';
//import smartOptions from './reducers'
import smartOptions from './reducers'
import {toggleSmartOption, smartOptionsEnum} from './actions'

let store = createStore(smartOptions)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
