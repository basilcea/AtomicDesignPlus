import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from './icon';
import Loader from './loader'
import React from 'react';


storiesOf('Atoms|Icon', module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add('base', () => <Icon onClick={action('clicked')}/>);
storiesOf('Atoms|loader',module)
  .add('loading',()=> <Loader />)