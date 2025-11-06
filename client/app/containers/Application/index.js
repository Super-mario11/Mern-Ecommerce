import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Homepage from '../Homepage';
import ProductPage from '../ProductPage';
import Login from '../Login';
import Signup from '../Signup';
import Account from '../Account';
import NotFound from '../../components/Common/NotFound';
import Footer from '../../components/Common/Footer';

const Application = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/category/:name" component={Homepage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/account" component={Account} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Application;
