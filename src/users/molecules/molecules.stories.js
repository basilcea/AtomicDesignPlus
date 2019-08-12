import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router'
import React from 'react';
import Links from './links'

storiesOf('Landing_Page|Molecules',module)
.addDecorator(StoryRouter())
.add('actions',()=><Links onClick={action('clicked')}/>)