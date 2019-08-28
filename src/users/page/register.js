import React,{Fragment} from 'react';
import {SignUpContext } from '../../context/context';
import loginImage from '../../assets/loginPage.png';
import styled from 'styled-components';
import Register from '../organisms/register_card';
import Login from '../organisms/login_card';
import Reset from '../organisms/reset_card';
import Background from '../../assets/background_meduim.png';
import BackgroundSmall from '../../assets/background.png';
import Tagline from '../molecules/tagline';

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:url('${BackgroundSmall}');
    background-repeat:no-repeat;
    background-size:108% 100%;
    background-position:right 100%;
    height:100vh;      
    @media (min-width:500px){
        background:url('${Background}');
        background-repeat:no-repeat;
        background-size:cover;
        background-position:right center;
}`;
const Img = styled.img`
  padding-top: 3%;
  width: 50%;
  height: 80%;
  @media (max-width: 800px) {
    height: 30%;
    width: 80%;
  }
`;
const Tagged = styled.div`
  transform: translateY(80px);
  @media (max-width: 800px) {
    transform: none;
  }
`;
const FirstHalf = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
    height: 30%;
  }
`;
const SecondHalf = styled.div`
  display: flex;
  width: 90%;
  height: 75%;
  margin: 0 5%;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const P = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
  margin-top: 3%;
  color: #fffdfd;
  font-size: 32px;
`;
const signInup = () => {
  return (
    <Div>
          <FirstHalf>
            <Tagged>
              <Tagline />
            </Tagged>
            <P>The best minimalistic workout tracker</P>
          </FirstHalf>
          <SecondHalf>
          <Img src= {loginImage} alt="" />
          <SignUpContext.Consumer>
          {({ signin, signup, reset }) => {
            return (
              <Fragment>
                {signup && <Register />}
              {signin && <Login />}
              {reset &&  <Reset />}
              </Fragment>
            )
      }}
    </SignUpContext.Consumer>
    </SecondHalf>
    </Div>
  );
};
export default signInup;
