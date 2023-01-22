import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import Showorhide from './Showorhide';

const store = createStore( Reducers, compose(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <div style={{}} className='Showorhide'><Showorhide/></div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
