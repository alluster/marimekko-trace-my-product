import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
require('dotenv').config();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)
console.log(process.env.REACT_APP_FIREBASE_API_KEY);

ReactDOM.render((
  
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>

  ), document.getElementById('root'))
  registerServiceWorker();
