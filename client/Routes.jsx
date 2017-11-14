import React from 'react';
import {
  Router, Route, Redirect, Switch, browserHistory
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Provider from 'react-redux';
import PropTypes from 'prop-types';
import ViewDocument from './components/ViewDocument';
import Home from './components/Home';
import Details from './components/Details';
import ManageDocument from './components/ManageDocument';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import ApiCall from './util/ApiCalls';

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/document/edit/:id" component={ManageDocument} /> 
        <Route path="/document/:id" component={ViewDocument} />
        <Route path="/document" component={ManageDocument} />  
           
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>);
};
export default Routes;