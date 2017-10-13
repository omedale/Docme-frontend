import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import *  as documentActions from './actions/documentAction'

import App from './components/App';
import Routes from './Routes';
const store = configureStore();
store.dispatch(documentActions.AllDocuments());
render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app'));