import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Div = Styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
padding-bottom:5%;
a{
    text-decoration:none;
    color:#FFFDFD;
    text-shadow:1px 1px black;
    font-size:18px;
    font-family:Arial;
    &:hover{
        color:#154A78
    }
}
`;
const Links = props => {
  return (
    <Div>
      <Link to={`/${props.link}`}>{props.value}</Link>
    </Div>
  );
};
export default Links;

Links.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string
};
