import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const P = styled.p`
  font-size: 12px;
  color: #fffdfd;
  font-weight:bold;
  text-align:right;
  padding-right:10%;
  a {
    text-decoration: none;
    color: #fffdfd;

    &:hover {
      color: #011936;
      text-shadow:none;
    }
  }
`;
const subActionStatement = props => {
  return (
    <P>
      {props.statement}
      <Link to={`/${props.link}`}> {props.value} </Link>
    </P>
  );
};
export default subActionStatement;
