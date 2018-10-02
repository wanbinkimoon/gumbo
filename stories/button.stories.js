import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Button from '../src/components/Button';

import '../src/global-styles';
import {Docs} from './styles';

storiesOf('Button', module)
  .addDecorator(StoryRouter())
  .add(
    'Button',
    withInfo(`

    ~~~js
      <Button label={'Pippo'} />
    ~~~

  `)(() => (
      <Docs>
        <Button />
      </Docs>
    ))
  );
