import React from 'react';
import { FaUser } from "react-icons/fa";
import styled from 'styled-components';

const Div = styled.div`
  height: 60%;
  width: 60%;
  border-radius: 50%;
  background-color: #FFFDFD;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserIcon = () => {
  return (
    <Div>
      <FaUser style={{color:`#154A78`, width:`50%` , height:`50%`}}/>
    </Div>
  );
};
export default UserIcon;
