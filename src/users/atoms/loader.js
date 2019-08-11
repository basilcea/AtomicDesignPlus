import React, { useEffect } from "react";
import { TimelineLite } from "gsap";
import styled from "styled-components";
import Dumbell from "../../assets/dumbell.png";
import { loadingContext } from "../../context/context";
const Div = styled.div`
  display: flex;
  width:30%;
  height:20%;
  justify-content:center;
  align-items:center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  margin:0;
`;
let loaderDiv;

const tween = () =>
  new TimelineLite({ paused: true }).fromTo(
    loaderDiv,
    1,
    {
      opacity: 1
    },
    { opacity: 0.3, onComplete: () => tween().reverse() }
  );

const Loader = () => {
  useEffect(() => {
    tween().play();
  }, []);

  return (
    <loadingContext.Provider value={{ loading: true }}>
      <loadingContext.Consumer>
        {({ loading }) =>
          loading && (
            <Div>
              <Img src={Dumbell} ref={div => (loaderDiv = div)} />
            </Div>
          )
        }
      </loadingContext.Consumer>
    </loadingContext.Provider>
  );
};
export default Loader;
