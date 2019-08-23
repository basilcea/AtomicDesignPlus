import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router'
import React from 'react';
import Links from './links'
import TagLine from './tagline'
import UserIcon from './userIcon'

storiesOf('Landing_Page|Molecules',module)
.addDecorator(StoryRouter())
.add('actions',()=><Links onClick={action('clicked')}/>)
.add('tagline',()=><TagLine/>)

storiesOf('Sign_Up_In|Molecules', module)
.add('userIcon', ()=> <UserIcon/>)