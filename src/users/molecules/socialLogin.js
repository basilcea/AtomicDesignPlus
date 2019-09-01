import React from "react";
import InputIcon from "../atoms/inputIcon";
import styled from "styled-components";
import PropTypes from "prop-types";
const Div = styled.div`
  display: flex;
 
  @media (min-width: 500px) {
      margin-right:1%;
    order: -1;
  }
`;
const Actions = (props) => {
  return (
    <Div>
      <InputIcon name={props.name} />
    </Div>
  );
};

export default Actions;


