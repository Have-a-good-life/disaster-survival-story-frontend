import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ingMsg from "@/assets/images/ingMsg.png";
import testCharacter from "@/assets/images/testCharacter.png";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";

const Index = () => {
  const [isApiSuccess, setIsApiSuccess] = useState(false);
  const navigate = useNavigate();
  // Simulate an API call
  useEffect(() => {
    const simulateApiCall = () => {
      setTimeout(() => {
        setIsApiSuccess(true);
      }, 2000); // Simulating a 2 seconds delay for the API call
    };

    simulateApiCall();
  }, []);

  if (isApiSuccess) {
    navigate(paths.result);
  }

  return (
    <Container>
      <IngMsgImg src={ingMsg} />
      <TestCharacterImg src={testCharacter} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IngMsgImg = styled.img`
  width: 16rem;
  height: 7.125rem;
  object-fit: contain;
  margin-bottom: 2.5rem;
  margin-top: 3rem;
`;

const TestCharacterImg = styled.img`
  width: 21.5625rem;
  height: 30.75rem;
  object-fit: contain;
`;
