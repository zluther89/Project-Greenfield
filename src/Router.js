import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RatingsReviews from './components/RatingsReviews/RatingReviews';
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products/:id" component={App} />
        <Route path="/products/:id/reviews" component={RatingsReviews} exact />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
