import React from  'react';
import styled from 'styled-components';
 const Div = styled.div`
 border-radius:10px 0px 0px 10px;
height:9.5%;
width:2%;
border:none;
outline:none;
color:#FFFDFD;
padding-left:5px;
font-family:Arial, Helvetica, sans-serif;
background-color:#154A78;
 `;
 const inputIcon = (props) =>{
    return <Div>{props.name}</Div>
 }
 export default inputIcon