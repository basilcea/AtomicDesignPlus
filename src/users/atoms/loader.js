import React, { useEffect } from "react";
import { TimelineMax } from "gsap";
import styled from "styled-components";
import Dumbell from "../../assets/logo.png";
import PropTypes from "prop-types";
const Div = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;
let loaderDiv;
export const tween =(value, action) =>
  new TimelineMax({ paused: true}).fromTo(
    value,
    0.25,
    {
      opacity: 1
    },
    { opacity: 0.3, delay: 0.25, onComplete: () => action }
  );

const Loader = props => {
  useEffect(() => {
    props.loading &&
      tween(loaderDiv, tween(loaderDiv).reverse())
        .repeat(-1)
        .play();
  }, []);

  return (
    <Div>
      <Img src={Dumbell} ref={div => (loaderDiv = div)} />
    </Div>
  );
};
export default Loader;

Loader.propTypes = {
  loading: PropTypes.bool
};
Loader.defaultProps = {
  loading: false
};

