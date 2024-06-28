import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ingMsg from "@/assets/images/ingMsg.png";
import testCharacter from "@/assets/images/testCharacter.png";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";
import { evaluationState, injuryState } from "@/recoils/atoms";
import { useRecoilValue } from "recoil";
import Slide from "@/components/slide/Slide";

const Index = () => {
  const [isApiSuccess, setIsApiSuccess] = useState(false);
  const evaluation = useRecoilValue(evaluationState);
  const injury = useRecoilValue(injuryState);
  const navigate = useNavigate();

  useEffect(() => {
    if (evaluation !== "" && injury !== "") {
      setTimeout(() => {
        setTimeout(() => {
          navigate(paths.result);
        }, 3000);
      }, 3000);
    }
  }, [evaluation, injury, navigate]);

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
