import React from 'react';
import styled from 'styled-components';
const P = styled.p`
color:#011936;
font-size:20px;
font-weight:bold;
font-family:Arial, Helvetica, sans-serif;
`
const ActionStatement = (props) => {
    return <P>{props.statement}</P>
}
export default ActionStatement;