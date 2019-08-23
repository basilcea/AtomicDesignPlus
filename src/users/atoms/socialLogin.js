import React from 'react';
import styled from 'styled-components';
 const Div = styled.div`
 border-radius:0 10px 10px 0;
height:10%;
width:15%;
border:none;
outline:none;
color:#FFFDFD;
padding-left:5px;
font-family:Arial, Helvetica, sans-serif;
background-color:#011936;
 `;
 const socialLogin = (props) =>{
    return <Div>{props.name}</Div>
 }
 export default socialLogin