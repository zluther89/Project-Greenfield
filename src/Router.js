import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/products/:id" component={App} />
      <Route path="/" component={App} />
    </Router>
  );
};

export default AppRouter;
