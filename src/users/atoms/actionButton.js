import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
color:#FFFDFD;
background-color:#154A78;
font-size:16px;
height:30px;
width:30%;
display:flex;
justify-content:center;
align-items:center;
font-family:Arial, Helvetica, sans-serif;
outline:none;
border-radius:10px 10px 0 0;
`
const ActionButton = (props) => {
    return <Button>{props.action}</Button>
}
export default ActionButton;