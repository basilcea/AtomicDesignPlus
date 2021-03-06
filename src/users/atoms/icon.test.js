
import React from "react";
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon from "./icon";
afterEach(cleanup)
it('shows the word Lifted',()=>{
    const {getByText, asFragment}= render(
        <Icon/>
    )
    expect(getByText(/lifted/i)).toBeDefined();
    expect(asFragment()).toMatchSnapshot()
})
