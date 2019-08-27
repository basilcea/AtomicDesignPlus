import React from 'react';
import User from '../atoms/usericon';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 50%;
  height: 40%;
  width: 25%;
  background-color: rgba(246, 193, 145, 1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transform:translateY(-50%)
`;

const UserIcon = () => {
  return (
    <Div>
      <User />
    </Div>
  );
};

export default UserIcon;
