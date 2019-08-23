import React from "react";
import { render, cleanup, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from './loader';
import {tween} from './loader';
const tweened= jest.fn((value, action) =>tween(value,action))
afterEach(cleanup);
it('loader should display', ()=> {
    const {getByRole, container, asFragment} = render(
        <Loader />
      );
      const ImageContent =getByRole('img')
      expect(container).toBeDefined()
      expect(ImageContent).toBeDefined();
      expect(asFragment()).toMatchSnapshot()
})
it('loader should animate if loading is true', () => {
    const {getByRole} = render(
        <Loader loading={true} />
      );
      const ImageContent = getByRole('img')
      let style = window.getComputedStyle(ImageContent)
      expect(style.opacity).toBe('1')
      expect(tweened).not.toHaveBeenCalled()
      tweened(ImageContent,'').play()
      const changed= fireEvent.change(ImageContent)
      expect(changed).toBe(true)
      expect(tweened).toHaveBeenCalled()
})
