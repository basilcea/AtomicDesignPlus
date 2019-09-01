import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/actionButton';
import ActionStatement from '../atoms/actionStatement';
import InputArea from '../molecules/inputArea';
import SubActionStatement from '../atoms/subActionStatement';

import { FaEnvelopeSquare } from 'react-icons/fa';
const Div = styled.div`
  border: 2px solid #f6c192;
  display: flex;
  border-radius: 10%;
  flex-direction: column;
  margin-top: 1%;
  align-items: center;
  width: 40%;
  height: 70%;
  form {
    width: 100%;
    justify-content: center;
    height: 300px;
  }
  @media (max-width: 800px) {
    width: 90%;
    order: -1;
    height: 70%;
  }
  @media (max-width: 320px) {
    height: 90%;
  }
`;
const P = styled.p`
  color: #f6c192;
  text-align:center;
  margin:0 5%;
  margin-bottom:10%;
`;
const ResetPassword = () => {
  return (
    <Div>
      <ActionStatement statement={'Reset Password'} />
      <form>
      <P>Please input your registered email</P>
      <InputArea
        icon={<FaEnvelopeSquare />}
        description={'Email'}
        type={'email'}
      />
      <SubActionStatement link={'signin'} value={'Go back to login'} />
      </form>
      <ActionButton action={'Reset'} />
    </Div>
  );
};
export default ResetPassword;
