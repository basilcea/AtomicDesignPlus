import React from "react";
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from "./image";

afterEach(cleanup)
it('displays an image',()=>{
    const {getByRole, asFragment, container}= render(
        <Image/>
    )
    const ImageContent =getByRole('img')
    expect(container).toBeDefined()
    expect(ImageContent).toBeDefined();
    expect(asFragment()).toMatchSnapshot()
})