import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppRouter from './Router.js';
import { Provider } from 'react-redux';
import store from './components/Redux/Store.js';

import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
