import React from "react";
import gymies from "../../assets/landing-page-girl.png";
import styled from "styled-components";
const Div = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 2%;
  margin: 0 5%;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    padding-top: 2%;
    width: 45%;
    min-height: 30vh;
  }
`;
const Image = styled.img`
  display: flex;
  width: 80%;
  height: 100%;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;

const LandingImage = () => {
  return (
    <Div>
      <Image src={gymies} />
    </Div>
  );
};
export default LandingImage;
