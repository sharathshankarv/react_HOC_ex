import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/store';
import './index.css'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>  
      <Router>
        <App />
      </Router>  
  </Provider>,
  document.querySelector('#root'),
);

