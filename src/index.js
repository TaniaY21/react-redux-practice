import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provider component
import store from './components/Store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
