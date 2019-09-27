import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import 'semantic-ui-css/semantic.min.css'

import './index.css';
import App from './App';
import { breweryReducer } from './reducers/index';

const store = createStore(breweryReducer, applyMiddleware(thunk, logger))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
  
  
  
