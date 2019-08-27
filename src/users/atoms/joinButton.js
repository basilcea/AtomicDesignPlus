import React, { Fragment } from "react";
import styled from "styled-components";
import  {SignUpContext} from '../../context/context';
const Button = styled.button`
  background-color: #011936;
  width: 30%;
  text-align: center;
  z-index: 2;
  margin-left: 35%;
  margin-bottom: 10%;
  font-size: 5vw;
  outline: none;
  border: none;
  color: #fffdfd;
  border:1px solid #F6C192;
  border-radius: 5px;
  height: 60px;
  &:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  @media (min-width: 1024px) {
    margin-bottom: 5%;
    height: 80px;
    font-size: 16px;
    width: 150px;
    transform: translate(25vw, -25vh);
  }
`;
const Join = (props) => {
  return(
  
  <Button onClick={() => props.redirect()}>Join Now</Button>

  );
}
export default Join;
