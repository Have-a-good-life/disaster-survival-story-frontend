import React from "react";
import styled, { keyframes } from "styled-components";

const slideUpDown = keyframes`
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

const SlideContainer = styled.div`
  animation: ${slideUpDown} 3s forwards;
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
`;

const Slide = () => {
  return <SlideContainer />;
};

export default Slide;
