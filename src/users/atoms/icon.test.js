import React from 'react';
import Icon from './icon'
import renderer from 'react-test-renderer';

test('should render a word', () => {
    const tree = renderer.create(<Icon/>).toJSON()
    expect(tree).toMatchSnapshot()
})