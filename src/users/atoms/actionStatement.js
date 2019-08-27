import React from 'react';
import styled from 'styled-components';
const P = styled.p`
color:#FFFDFD;
font-size:30px;
font-weight:bold;
font-family:Arial, Helvetica, sans-serif;
padding-bottom:5%;
@media (max-width:500px){
    font-size:20px;
}
`
const ActionStatement = (props) => {
    return <P>{props.statement}</P>
}
export default ActionStatement;