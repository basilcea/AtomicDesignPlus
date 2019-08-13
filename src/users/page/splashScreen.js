import React from "react";
import Loader from "../atoms/loader";
import Styled from "styled-components";
import { LoadingContext } from "../../context/context";

const Div = Styled.div`
background-color:#2F303A;
min-height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;
const LoadingPage = (props) => {
  return (
            <Div>
              <Loader loading={props.loading} />
            </Div>
          )
    
};

export default LoadingPage;
