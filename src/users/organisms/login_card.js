import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/actionButton';
import ActionStatement from '../atoms/actionStatement'
import InputArea from '../molecules/inputArea';
import SocialLogin from '../molecules/socialLogin';
import SubActionStatement from "../atoms/subActionStatement";
import UserIcon from "../molecules/userIcon";
import {FaEnvelopeSquare, FaGoogle, FaFacebookF , FaLock} from 'react-icons/fa';
const Div = styled.div `
background-color:rgb(168 ,184 ,201 ,1);
`;
const Login = ()=>{
    return (
        <Div>
        <UserIcon statement={'Login to Lifted'}/>
        <ActionStatement />
        <SocialLogin  icon={<FaGoogle/>} description={'Connect with Gmail'} />
        <SocialLogin  icon={<FaFacebookF/>} description={'Connect with Facebook'} />
        <p>OR</p>
        <InputArea icon={<FaEnvelopeSquare />} description={'Email'} type={'email'}/>
        <InputArea icon={<FaLock />} description={'Password'} type={'password'}/>
        <SubActionStatement link={'reset'}  value={'forgot password?'}/>
        <SubActionStatement statement={'Not lifted?'} link={'register'}  value={'Register'}/>
        <ActionButton action={'Login'}/>
        </Div>
    )
}
export default Login;