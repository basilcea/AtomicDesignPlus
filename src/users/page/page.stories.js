import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router";
import Loading from './splashScreen';
import Landing from './landing';

storiesOf('Splash_Screen|Page', module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add('loading',()=> <Loading loading={true}/>)
  storiesOf('Landing_Page|Page', module)
  .addDecorator(StoryRouter())
  .add('landing', ()=> <Landing />)