import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products/:id" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
