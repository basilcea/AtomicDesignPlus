import React from 'react';
import styled from 'styled-components';
import InputIcon from '../atoms/inputIcon';
import Social from '../atoms/socialLogin';
const Div = styled.div`
  display: flex;
`;
const SocialLogin = props => {
  return (
    <Div>
      <InputIcon name={props.icon} />
      <Social name={props.description} />
    </Div>
  );
};
export default SocialLogin;
