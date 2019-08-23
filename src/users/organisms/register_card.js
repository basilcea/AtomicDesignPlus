import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/actionButton';
import ActionStatement from '../atoms/actionStatement'
import InputArea from '../molecules/inputArea';
import SubActionStatement from "../atoms/subActionStatement";
import UserIcon from "../molecules/userIcon";
import {FaEnvelopeSquare, FaUser,  FaLock} from 'react-icons/fa';
const Div = styled.div `
background-color:rgb(168 ,184 ,201 ,1);
`;
const Register = ()=>{
    return (
        <Div>
        <UserIcon />
        <ActionStatement statement={'Register on Lifted'} />
        <InputArea icon={<FaUser />} description={'Username'} type={'text'}/>
        <InputArea icon={<FaEnvelopeSquare />} description={'Email'} type={'email'}/>
        <InputArea icon={<FaLock />} description={'Password'} type={'password'}/>
        <InputArea icon={<FaLock />} description={'Confirm Password'} type={'password'}/>
        <SubActionStatement statement={'Already Lifting?'} link={'login'}  value={'Login'}/>
        <ActionButton action={'Register'}/>
        </Div>
    )
}
export default Register;