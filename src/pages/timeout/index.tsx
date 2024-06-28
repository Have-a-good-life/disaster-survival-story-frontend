import React from "react";
import dieIcon from "@/assets/images/dieIcon.png";
import { styled } from "styled-components";
import timeoutMsg from "@/assets/images/timeOutMsg.png";
import GuideButton from "@/components/button/GuideButton";
import paths from "@/constants/paths";
import {
  situationState,
  evaluationState,
  injuryState,
  progressState,
} from "@/recoils/atoms";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";

const Timeout = () => {
  const navigate = useNavigate();
  const situation = useRecoilValue(situationState);
  const resetSituation = useResetRecoilState(situationState);
  const resetEvaluation = useResetRecoilState(evaluationState);
  const resetInjury = useResetRecoilState(injuryState);
  const resetProgress = useResetRecoilState(progressState);
  const resetAllRecoilStates = () => {
    resetSituation();
    resetEvaluation();
    resetInjury();
    resetProgress();
  };

  const handleRetryClick = () => {
    resetAllRecoilStates();
    navigate(paths.splash);
  };

  const handleGoHomeClick = () => {
    resetAllRecoilStates();
    navigate(paths.home);
  };
  return (
    <Container>
      <TimeOutMsg src={timeoutMsg} /> <DieImg src={dieIcon} />
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

export default Timeout;

const TimeOutMsg = styled.img`
  width: 20.625rem;
  height: 8.8125rem;
  object-fit: contain;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DieImg = styled.img`
  width: 17.1875rem;
  height: 6.875rem;
  margin-bottom: 3rem;
  object-fit: contain;
`;
const ButtonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;