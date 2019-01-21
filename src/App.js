import React, {Component} from 'react';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';

import '../node_modules/antd/dist/antd.min.css';

import './global-styles';
import Routing from './routes';
import {configureStore} from './stores';

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
