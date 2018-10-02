import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from '../containers/Home';
import NotFoundPage from '../containers/NotFoundPage';

import {Wrap} from './styles';

const history = createHistory();

export default function Routing() {
  let prevLocation = {};
  history.listen(location => {
    const pathChanged = prevLocation.pathname !== location.pathname;
    const hashChanged = prevLocation.hash !== location.hash;
    if (pathChanged || hashChanged) {
      window.scrollTo(0, 0);
    }
    prevLocation = location;
  });
  return (
    <Wrap>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </Wrap>
  );
}
