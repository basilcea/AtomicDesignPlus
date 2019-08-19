import React from "react";
import Link from "../atoms/link";
import styled from "styled-components";
import PropTypes from "prop-types";
const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media (min-width: 500px) {
    width: 40%;
    order: -1;
    margin-top: 3%;
    margin-left: 60%;
  }
`;
const Actions = () => {
  return (
    <Div>
      <Link link={"discover"} value={"Discover"} />
      <Link link={"sign_in"} value={"Sign In"} />
    </Div>
  );
};

export default Actions;

Actions.propTypes = {
  Link: PropTypes.element
};
