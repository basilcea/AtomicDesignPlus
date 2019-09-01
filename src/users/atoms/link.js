import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Button = Styled.button`
display:flex;
justify-content:flex-start;
align-items:center;
padding-bottom:5%;
background-color:inherit;
border:none;
font-size:18px;
outline:none;
color:#FFFDFD;
&:hover{
  color:#F6C192;
}
`;
const Links = props => {
  return (
      <Button onClick={() => props.redirect(props.link)}>{props.value}</Button>
  
  );
};
export default Links;

Links.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string
};
