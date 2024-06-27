import paths from "@/constants/paths";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import splash1 from "@/assets/images/splash1.png";
import splash2 from "@/assets/images/splash2.png";
import splash3 from "@/assets/images/splash3.png";

const Splash = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [splash1, splash2, splash3];

  useEffect(() => {
    if (currentImageIndex < images.length) {
      const timer = setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        navigate(paths.prompt);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, images.length, navigate]);

  return (
    <Container>
      {images.map((image, index) => (
        <ImageWrapper key={index} isVisible={index <= currentImageIndex}>
          <Image src={image} alt={`splash${index + 1}`} />
        </ImageWrapper>
      ))}
    </Container>
  );
};

export default Splash;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  position: relative;
`;

interface ImageWrapperProps {
  isVisible: boolean;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33.33%;
  animation: ${({ isVisible }) =>
    isVisible &&
    css`
      ${fadeIn} 1s ease-in-out
    `};
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
