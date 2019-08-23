import React from 'react';
import styled from 'styled-components';

const Input = styled.input`

border-radius:0 10px 10px 0;
height:20%;
border:none;
outline:none;
padding-left:5px;
background-color:#011936;
&::placeholder{
    color:#FFFDFD;
}
`;

const InputField = (props)=>{
    return <Input placeholder={props.name} type={props.type} />
}
export default InputField;