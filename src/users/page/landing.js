import React from 'react';
import Actions from '../molecules/links';
import Tagline from '../molecules/tagline';
import Button from '../atoms/joinButton';
import Image from '../atoms/image';
import styled from 'styled-components';

const Div = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#2F303A;
    height:100vh;
    /* align-items:center; */
    justify-content:flex-start;
    img{
     padding-top:3%;
        
    }

`;
const ImageDiv=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:20%;
    padding-bottom:30%;
    justify-content:center;
button{
    margin-top:0%;
    transform:translateY(-15px);
}
`
;
const LandingPage = () => {
    return (
       <Div>
       <Tagline/>
       <Image/>
       <Button/>
       <Actions/>
    
       </Div>
    )
}

export default LandingPage