import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './loading';


storiesOf('Pages', module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add('loading',()=> <Loading />)