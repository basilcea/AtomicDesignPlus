import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import React from 'react'
import Reset from './reset_card'

storiesOf('Sign_Up_In|Organisms',module)
.addDecorator(StoryRouter())
// eslint-disable-next-line react/react-in-jsx-scope
.add('Reset',()=> <Reset/>)