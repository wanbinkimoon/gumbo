import React, {Component} from 'react';
// Redux Store
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {configureStore} from './stores';

import Routing from './Routing';

import './global-styles';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <IntlProvider locale="en">
        <Provider store={store}>
          <Routing />
        </Provider>
      </IntlProvider>
    );
  }
}

export default App;
