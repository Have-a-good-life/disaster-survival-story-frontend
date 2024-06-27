import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import bestImg from "@/assets/images/bestMsg.png";
import GuideButton from "@/components/button/GuideButton";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";
import BlurInput from "@/components/blurInput/BlurInput";
import { situationState } from "@/recoils/atoms";

import { useTypingEffect } from "@/hooks/useTypingEffects";
import { getBestReactions } from "@/apis/prompt";

const Final = () => {
  const navigate = useNavigate();
  const situation = useRecoilValue(situationState);
  const [bestReactions, setBestReactions] =
    useState<string>("행동 지침 요령 작성 중...");
  const displayedReactions = useTypingEffect(bestReactions, 100);

  useEffect(() => {
    const fetchBestReactions = async () => {
      try {
        if (
          situation.situationId !== null &&
          situation.situationId !== undefined
        ) {
          const response = await getBestReactions(situation.situationId);
          setBestReactions(response);
        }
      } catch (error) {
        console.error("Failed to fetch best reactions:", error);
      }
    };

    fetchBestReactions();
  }, [situation.situationId]);

  const handleRetryClick = () => {
    navigate(paths.splash);
  };

  const handleGoHomeClick = () => {
    navigate(paths.home);
  };

  return (
    <Container>
      <HeaderWrapper>
        <BestImg src={bestImg} />
      </HeaderWrapper>
      <BlurInput text={displayedReactions} />
      <ButtonWrapper>
        <GuideButton
          label="다시하기"
          labelColor={theme.colors.black}
          onClick={handleRetryClick}
          backgroundColor={theme.colors.white}
          hoverColor="rgba(255, 255, 255, 0.50)"
        />
        <GuideButton
          label="처음으로"
          labelColor={theme.colors.white}
          onClick={handleGoHomeClick}
          backgroundColor={theme.colors.gray}
          hoverColor="rgba(110, 110, 110, 0.50)"
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Final;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: start;
  margin-bottom: 1.5rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BestImg = styled.img`
  width: 15.125rem;
  height: 4.3125rem;
  object-fit: contain;
`;
