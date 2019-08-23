import React from 'react';
import User from '../atoms/usericon';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 50%;
  height: 77.8px;
  width: 85.03px;
  background-color: rgba(89, 150, 241, 0.31);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserIcon = () => {
  return (
    <Div>
      <User />
    </Div>
  );
};

export default UserIcon;
