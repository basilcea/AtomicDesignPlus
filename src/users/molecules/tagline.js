import React from "react";
import Dumbell from "../../assets/logo.png";
import Lifted from "../atoms/icon";
import Styled from "styled-components";
const Div = Styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin-top:3%;
    p{ margin:5px; }
    @media(min-width:1024px){
        width:30%;
        margin-top:0;
        align-items:flex-start;
        transform:translateY(-50px)
    }
    @media(min-width:1024px){
        transform:translateY(-60px)
    }
`;
const Logodiv = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    @media(min-width:1024px){
        flex-direction:row;
        justify-content:center;
        padding-left:20%;
     

    }
`;
const Logo = Styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
`;
const P = Styled.p`
 color:#FFFDFD;
        text-shadow:1px 1px black;
        font-size:16px;
        @media(min-width:1024px){
            display:none;
        }
`;
const Tagline = () => {
  return (
    <Div>
      <Logodiv>
        <Logo src={Dumbell} />
        <Lifted />
      </Logodiv>
      <P>The best minimalistic workout tracker </P>
    </Div>
  );
};
export default Tagline;
