import React from "react";
import Button from "../atoms/link";
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
const Actions = (props) => {
  return (
    <Div>
      <Button link={"discover"} value={"Discover"} {...props}/>
      <Button link={"signin"} value={"Sign In"} {...props}/>
    </Div>
  );
};

export default Actions;

Actions.propTypes = {
  Button: PropTypes.element
};
