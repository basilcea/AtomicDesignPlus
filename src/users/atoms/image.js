import React from 'react'
import gymies from '../../assets/gymies.png'
import styled from 'styled-components'

const Image = styled.img`
display:flex;
width:80%;
height:50%;
justify-content:center;
align-items:center;
`;

const LandingImage = () => {
    return <Image src={gymies} />
}
export default LandingImage
