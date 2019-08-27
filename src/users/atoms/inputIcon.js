import React from  'react';
import styled from 'styled-components';
 const Div = styled.div`
 border-radius:10px 0px 0px 10px;
height:100%;
width:8%;
border:1px solid #F6C192;
outline:none;
color:#FFFDFD;
display:flex;
justify-content:center;
align-items:center;
padding-left:5px;
margin-top:0.5%;

font-family:Arial, Helvetica, sans-serif;
background-color:#011936;
 `;
 const inputIcon = (props) =>{
    return <Div>{props.name}</Div>
 }
 export default inputIcon