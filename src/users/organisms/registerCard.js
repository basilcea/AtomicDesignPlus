import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/actionButton';
import ActionStatement from '../atoms/actionStatement'
import InputArea from '../molecules/inputArea';
import SubActionStatement from "../atoms/subActionStatement";
import {FaEnvelopeSquare, FaUser,  FaLock} from 'react-icons/fa';
const Div = styled.div `
border:2px solid #F6C192 ;
display:flex; 
border-radius:10%;
flex-direction:column;
margin-top:1%;
align-items:center;
width:40%;
height:70%;

form{
    width:100%;
    justify-content:center;
    height:300px;
}
@media (max-width:800px){
    width:90%;
    order:-1;
    height:70%;
}
@media (max-width:320px){
    height:90%;
}
`;
const Register = ()=>{
    return (
        <Div>
        <ActionStatement statement={'Register on Lifted'} />
        <form>
        <InputArea icon={<FaUser />} description={'Username'} type={'text'}/>
        <InputArea icon={<FaEnvelopeSquare />} description={'Email'} type={'email'}/>
        <InputArea icon={<FaLock />} description={'Password'} type={'password'}/>
        <InputArea icon={<FaLock />} description={'Confirm Password'} type={'password'}/>
        <SubActionStatement statement={'Already Lifting?'} link={'signin'}  value={'Login'}/>
        </form>
        <ActionButton action={'Register'}/>
        </Div>
    )
}
export default Register;