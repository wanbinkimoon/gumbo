/* eslint strict: ["off"] */
'use strict';

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Users',
    },
  ],
  actions: data => { // eslint-disable-line
    // console.log(data);

    const actions = [
      {
        type: 'add',
        path: '../../src/stores/{{properCase name}}/index.js',
        templateFile: './store/store.js.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
