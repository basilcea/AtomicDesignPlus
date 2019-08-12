import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router'
import Icon from './icon';
import Loader from './loader'
import React from 'react';
import Image from './image';
import Links from './link'

storiesOf('Loading_Page|Atoms', module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add('lifted', () => <Icon onClick={action('clicked')}/>)
  .add('loading',()=> <Loader />)
storiesOf('Landing_Page|Atoms', module)
  .addDecorator(StoryRouter())
  .add('gyming',()=><Image />)
  .add('sign in',()=> <Links value={'Sign in'}/>)
  .add('sign up',()=> <Links value={'Sign up'}/>)