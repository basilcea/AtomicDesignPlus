import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/actionButton';
import ActionStatement from '../atoms/actionStatement';
import SocialLogin from '../molecules/socialLogin';
import InputArea from '../molecules/inputArea';
import SubActionStatement from '../atoms/subActionStatement';
import {
  FaEnvelopeSquare,
  FaGoogle,
  FaFacebookF,
  FaLock,
} from 'react-icons/fa';
const Div = styled.div`
  border: 2px solid #f6c192;
  display: flex;
  border-radius: 10%;
  flex-direction: column;
  margin-top: 1%;
  align-items: center;
  width: 40%;
  height: 70%;
  p{
text-align:center;
padding-bottom:5%;
color:#FFFDFD;
  }

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
  @media (max-width:320px){
    height:90%;
}
`;
const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width:40%;
  height:15%;
  margin-left:30%;
  div {
    width: 100%;
    div {
      width: 100%;
    }
    &:last-of-type {
      div {
        border-radius: 0 10px 10px 0;
      }
    }
  }
`;
const SubActions = styled.div`
display:flex;
width:100%;
justify-content: space-between;
p{
    width:50%;
}
`;
const Login = () => {
  return (
    <Div>
      <ActionStatement statement={'Login to Lifted'} />
      <form>
        <Social>
          <SocialLogin name={<FaGoogle />} />
          <SocialLogin name={<FaFacebookF />} />
        </Social>
        <p>OR</p>
        <InputArea
          icon={<FaEnvelopeSquare />}
          description={'Email'}
          type={'email'}
        />
        <InputArea
          icon={<FaLock />}
          description={'Password'}
          type={'password'}
        />
        <SubActions>
        <SubActionStatement link={'reset'} value={'forgot password?'} />
        <SubActionStatement
          statement={'Not lifted?'}
          link={'register'}
          value={'Register'}
        />
        </SubActions>
      </form>
      <ActionButton action={'Login'} />
    </Div>
  );
};
export default Login;
