import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
background-color:#154A78;
width:30%;
text-align:center;
z-index:2;
margin-left:35%;
margin-bottom:10%;
font-size:5vw;
outline:none;
border:none;
color:#FFFDFD;
border-radius:5px;
height:60px;
@media (min-width:500px){
    margin-bottom:5%;
height:80px;
}
`;
const Join =  () =>{
    return (
        <Button>
        Join Now
        </Button>
    )
}
export default Join