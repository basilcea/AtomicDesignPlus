import React from "react";
import Actions from "../molecules/links";
import Tagline from "../molecules/tagline";
import Button from "../atoms/joinButton";
import Image from "../atoms/image";
import styled from "styled-components";
import Background from "../../assets/background_meduim.png";
import BackgroundSmall from "../../assets/background.png";
const Div = styled.div`
    display:flex;
    flex-direction:column;
    background:url('${BackgroundSmall}');
    background-repeat:no-repeat;
    background-size:108% 100%;
    background-position:right 100%;
    height:100vh;
    img{
     padding-top:3%;
        
    }
    @media (min-width:500px){
        background:url('${Background}');
        background-repeat:no-repeat;
        background-size:cover;
        background-position:right center;
}
`;
const Hero = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  display: flex;
  width: 60%;
  padding-top: 5%;
  flex-direction: column;
  h1 {
    color: #fffdfd;
    font-size: 60px;
    margin: 0;
    padding-left: 23%;
  }
  p {
    color: #fffdfd;
    font-size: 32px;
    margin: 0;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  height: 70%;
  flex-direction: row;
  padding: 10% 0%;
  justify-content: center;
  @media (min-width: 500px) {
    padding: 5% 0%;
  }
  button {
    margin-top: 0%;
    transform: translateY(-15px);
  }
`;
const LandingPage = (props) => {
  const redirect =(value) =>{
    props.formToDisplay(value)
    props.history.push(`./${value}`)
  }
  return (
    <Div>
      <Tagline />
      <ImageDiv>
        <Image />
        <Hero>
         <h1>Lifted</h1>
          <p>The best minimalistic workout tracker</p>
        </Hero>
      </ImageDiv>
      <Button  redirect={redirect}/>
      <Actions redirect={redirect}/>
    </Div>
  );
};

export default LandingPage;
