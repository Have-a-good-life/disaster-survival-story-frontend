import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  label: string;
  labelColor: string;
  onClick: () => void;
  backgroundColor: string;
  hoverColor: string;
};

const GuideButton = ({
  label,
  labelColor,
  onClick,
  backgroundColor,
  hoverColor,
}: Props) => {
  return (
    <Container
      onClick={onClick}
      labelColor={labelColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {label}
    </Container>
  );
};

export default GuideButton;

type ContainerProps = {
  labelColor: string;
  backgroundColor: string;
  hoverColor: string;
};

const Container = styled.div<ContainerProps>`
  width: 23.875rem;
  height: 4.1875rem;
  border-radius: 0.625rem;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "VitroPride";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ labelColor }) => labelColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;
