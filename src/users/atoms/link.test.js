import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Linked from "./link";
afterEach(cleanup);
function renderWithRouter(ui) {
  return {
    ...render(<Router>{ui}</Router>)
  };
}
it("display a link", () => {
  const { getByText, asFragment, container } = renderWithRouter(
    <Linked value={"Sign In"} link={"sign_in"} />
  );
  expect(container.innerHTML).toMatch("Sign In");
  fireEvent.click(getByText(/sign in/i));
  expect(asFragment()).toMatchSnapshot();
});
