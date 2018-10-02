import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';

const history = createHistory();

export default function Routing() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
