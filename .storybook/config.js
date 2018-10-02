import {addDecorator, configure} from '@storybook/react';
import {setIntlConfig, withIntl} from 'storybook-addon-intl';
import {setDefaults} from '@storybook/addon-info';


// Load the locale data for all your defined locales
import {addLocaleData} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData(enLocaleData);

// Provide your messages
const messages = {};

const getMessages = locale => messages[locale];

// Set intl configuration
setIntlConfig({
  locales: ['en'],
  defaultLocale: 'en',
  getMessages,
});

// addon-info
setDefaults({
  inline: true,
  propTablesExclude: ['storybook-exclude'],

});

// Register decorator
addDecorator(withIntl);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
