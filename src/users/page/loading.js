import React from 'react';
import Icon from '../atoms/icon';
import Loader from '../atoms/loader';
import Styled from 'styled-components';

const Div = Styled.div`
background-color:#154A78;
min-height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;
const LoadingPage = () => {
return <Div>
<Loader/>
<Icon/>
</Div>
}
export default LoadingPage