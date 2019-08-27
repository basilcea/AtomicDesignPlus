import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
border-radius:0 10px 10px 0;
height:100%;
width:70%;
border:none;
outline:none;
padding-left:5%;
background-color:inherit;
color:#FFFDFD;
font-size:14px;
border-bottom:2px solid #F6C192;
&::placeholder{
    color:#FFFDFD;
    font-size:14px;
}
`;

const InputField = (props)=>{
    return <Input placeholder={props.name} type={props.type} />
}
export default InputField;