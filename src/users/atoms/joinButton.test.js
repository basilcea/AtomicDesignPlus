import React from "react";
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JoinButton from "./joinButton";
afterEach(cleanup)

it('displays a button',()=>{
    const {getByText, asFragment} = render(<JoinButton/>)
    expect(getByText('Join Now')).toBeDefined()
    expect(asFragment()).toMatchSnapshot()
})