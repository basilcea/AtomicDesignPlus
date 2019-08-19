import React from "react";
import { render, cleanup, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from './loader';
import {tween} from './loader'
jest.useFakeTimers();
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
      fireEvent.load(ImageContent,tween(ImageContent).vars.paused = false)
     
     style = window.getComputedStyle(ImageContent)
     console.log(style)
    //  expect(tweened).toHaveBeenLastCalledWith(expect.any(Function), 1000);
})
it('should reverse on complete',()=>{

})
it('should not display if loading is false',()=>{

})
