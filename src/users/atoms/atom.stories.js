import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from './icon';
import Loader from './loader'
import React from 'react';

storiesOf('Atoms|Pre-Auth', module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add('logo', () => <Icon onClick={action('clicked')}/>)
  .add('loading',()=> <Loader />)