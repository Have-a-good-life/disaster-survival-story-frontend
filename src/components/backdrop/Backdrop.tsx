import React, { useEffect } from "react";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const BackDrop = ({ children, isOpen }: Props) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return <Container>{children ?? null}</Container>;
};

export default BackDrop;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000040;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
`;
