import BlurInput from "@/components/blurInput/BlurInput";
import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import youImg from "@/assets/images/youMsg.png";
import avartarImg from "@/assets/images/avartarCharacter.png";
import surviveIcon from "@/assets/images/surviveIcon.png";
import dieIcon from "@/assets/images/dieIcon.png";
import GuideButton from "@/components/button/GuideButton";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";
import { useRecoilValue } from "recoil";
import { injuryState, evaluationState } from "@/recoils/atoms";
import { useTypingEffect } from "@/hooks/useTypingEffects";

const Result = () => {
  const injury = useRecoilValue(injuryState);
  const evaluation = useRecoilValue(evaluationState);
  const displayedEvaluation = useTypingEffect(evaluation, 100);
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    if (displayedEvaluation === evaluation) {
      setShowImage(true);
    }
  }, [displayedEvaluation, evaluation]);
  const handleBtnClick = () => {
    navigate(paths.final);
  };
  return (
    <Container>
      <HeaderWrapper>
        <YouImg src={youImg} />
        <AvartarImg src={avartarImg} />
      </HeaderWrapper>
      <InputWrapper>
        <BlurInput text={displayedEvaluation || "로딩 중..."} />
      </InputWrapper>

      {showImage && (
        <ImageWrapper>
          {injury === "생존" ? (
            <SurviveImg src={surviveIcon} />
          ) : injury === "사망" ? (
            <DieImg src={dieIcon} />
          ) : (
            <></>
          )}
        </ImageWrapper>
      )}
      <BtnWrapper>
        <GuideButton
          label={"다음"}
          labelColor={theme.colors.black}
          onClick={handleBtnClick}
          backgroundColor={theme.colors.white}
          hoverColor="rgba(255, 255, 255, 0.50)"
        />
      </BtnWrapper>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const InputWrapper = styled.div`
  margin-bottom: 8rem;
  position: relative;
`;
const YouImg = styled.img`
  width: 9.4375rem;
  height: 4.3125rem;
  object-fit: contain;
`;
const AvartarImg = styled.img`
  width: 4.62688rem;
  height: 5rem;
  object-fit: contain;
`;
const SurviveImg = styled.img`
  object-fit: contain;
  width: 15.0625rem;
  height: 6.875rem;
`;
const DieImg = styled.img`
  width: 17.1875rem;
  height: 6.875rem;
  object-fit: contain;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 13%;
  right: 24%;
  animation: ${fadeIn} 3s ease-in-out;
`;

const BtnWrapper = styled.div`
  position: fixed;
  bottom: 3%;
  display: flex;
  justify-content: center;
  width: 100%;
`;
