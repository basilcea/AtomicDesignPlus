import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './splashScreen';

storiesOf('Loading_Page|Page', module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add('loading',()=> <Loading />)