import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/actionButton';
import ActionStatement from '../atoms/actionStatement'
import InputArea from '../molecules/inputArea'
import SubActionStatement from "../atoms/subActionStatement";
import UserIcon from "../molecules/userIcon";
import {FaEnvelopeSquare} from 'react-icons/fa';
const Div = styled.div `
background-color:rgb(168 ,184 ,201 ,1);
`;
const ResetPassword = ()=>{
    return (
        <Div>
        <UserIcon />
        <ActionStatement />
        <p>Please input your registered users address</p>
        <InputArea  icon={<FaEnvelopeSquare />} name={"Email"} type={'email'}/>
        <SubActionStatement link={'login'}  value={'Go back to login'}/>
        <ActionButton action={'Reset'}/>
        </Div>
    )
}
export default ResetPassword;