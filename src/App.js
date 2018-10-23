import React, {Component} from 'react';
import * as firebase from 'firebase';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';

import '../node_modules/antd/dist/antd.min.css';

import './global-styles';
import Routing from './routes';
import {configureStore} from './stores';

const config = {
  apiKey: 'AIzaSyD3QyY1gdibjCS87_QJitoQ3AIXgIAT1EY',
  authDomain: 'jazzology-7be01.firebaseapp.com',
  databaseURL: 'https://jazzology-7be01.firebaseio.com',
  projectId: 'jazzology-7be01',
  storageBucket: 'jazzology-7be01.appspot.com',
  messagingSenderId: '809601814042',
};
firebase.initializeApp(config);

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
