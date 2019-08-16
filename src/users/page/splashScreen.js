import React from "react";
import Loader from "../atoms/loader";
import Styled from "styled-components";
import PropTypes from 'prop-types';

const Div = Styled.div`
background-color:#2F303A;
min-height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const LoadingPage = props => {
  return (
    <Div>
      <Loader loading={props.loading} />
    </Div>
  );
};

export default LoadingPage;

LoadingPage.propTypes = {
  Loader:PropTypes.element,
  loading:PropTypes.bool
}