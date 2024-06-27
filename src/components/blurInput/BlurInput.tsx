import React from "react";
import { styled } from "styled-components";

const BlurInput = ({ text }: { text: string }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default BlurInput;
const Container = styled.div`
  width: 23.1875rem;
  height: 30.25rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(15px);
  display: flex;
  align-items: flex-start;
  justify-content: start;
  padding: 1.5rem;
`;

const Text = styled.div`
  font-size: 1.25rem;
  color: #fff;
  font-family: "VitroPride";
  text-align: left;
  line-height: 1.5;
`;
