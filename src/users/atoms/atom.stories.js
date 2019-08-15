import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router'
import Icon from './icon';
import Loader from './loader'
import React from 'react';
import Image from './image';
import Links from './link'
import Button from './joinButton'

storiesOf('Splash_Screen|Atoms', module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add('loading',()=> <Loader loading={true} />)
storiesOf('Landing_Page|Atoms', module)
  .addDecorator(StoryRouter())
  .add('lifted', () => <Icon onClick={action('clicked')}/>)
  .add('gyming',()=><Image />)
  .add('discover',()=> <Links value={'Discover'}/>)
  .add('sign in',()=> <Links value={'Sign in'}/>)
  .add('join now', ()=>  <Button />)