import React, {Component} from 'react';
// Redux Store
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {configureStore} from './stores';

import Routing from './routes';

import './global-styles';
import '../node_modules/antd/dist/antd.min.css';

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
