import React, { useEffect, useState } from "react";
import situMsg from "@/assets/images/situMsg.png";
import strMsg from "@/assets/images/strMsg.png";
import testMsg from "@/assets/images/testMsg.png";
import styled, { keyframes } from "styled-components";
import backgroundImg from "@/assets/images/promptbg.png";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";
import { useRecoilState } from "recoil";
import {
  evaluationState,
  injuryState,
  progressState,
  situationState,
} from "@/recoils/atoms";
import { useTypingEffect } from "@/hooks/useTypingEffects";
import { evaluateUserReaction } from "@/apis/prompt";

const Prompt = () => {
  const [progress, setProgress] = useRecoilState(progressState);
  const [page, setPage] = useState<"prompt" | "answer" | "result">("prompt");
  const [showSlide, setShowSlide] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [evaluation, setEvaluation] = useRecoilState(evaluationState);
  const [injury, setInjury] = useRecoilState(injuryState);
  const navigate = useNavigate();
  const [situation] = useRecoilState(situationState);
  const displayedDesc = useTypingEffect(situation.situationDesc || "", 100);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timer);
          setTimeout(() => {
            setShowSlide(true);
            setTimeout(() => {
              setProgress(100);
              setPage("answer");
              setShowSlide(false);
              const secondTimer = setInterval(() => {
                setProgress((prevProgress) => {
                  if (prevProgress <= 0) {
                    clearInterval(secondTimer);
                    setTimeout(() => navigate(paths.survival), 100);
                    return 0;
                  }
                  return prevProgress - 100 / 100; // 100초 동안 진행
                });
              }, 1000);
            }, 3000); // 슬라이드 애니메이션 시간
          }, 1500); // 프로그레스 바가 다 사라진 후 1초 후 슬라이드 시작
          return 0;
        }
        return prevProgress - 100 / 15;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, setProgress]);

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    if (value.length <= 140) {
      setInputValue(value);
    }
  };

  const handleTestClick = async () => {
    setProgress(0);
    if (situation.situationId === undefined) {
      console.error("Situation ID is undefined");
      return;
    }
    try {
      const response = await evaluateUserReaction({
        situation_id: situation.situationId,
        user_reaction: inputValue,
      });
      setEvaluation(response.evaluation);
      setInjury(response.injury);
      setPage("result");
    } catch (error) {
      console.error("Failed to evaluate user reaction:", error);
    }
  };

  return (
    <Container>
      {page === "prompt" && <SituMsgImg src={situMsg} />}
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
      {showSlide && <Slide />}
      <PromptWrapper page={page} showSlide={showSlide}>
        <PromptMsgWrapper>
          {page === "prompt" ? displayedDesc : situation.situationDesc}
        </PromptMsgWrapper>
      </PromptWrapper>
      {page === "answer" && (
        <>
          <StrMsgImg src={strMsg} />
          <StyledTextarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="입력하세요..."
          />
          <CharacterCount>{inputValue.length} / 140</CharacterCount>
          <TestMsgImg onClick={handleTestClick} src={testMsg} />
        </>
      )}
    </Container>
  );
};

export default Prompt;

const SituMsgImg = styled.img`
  margin-top: 10rem;
`;

const StrMsgImg = styled.img`
  z-index: 5;
  margin-top: 17rem;
`;

const TestMsgImg = styled.img`
  margin-top: 2rem;
`;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const PromptWrapper = styled.div<{ page: string; showSlide: boolean }>`
  background-image: url(${backgroundImg});
  width: 32.73688rem;
  height: 23.5625rem;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ page }) => (page === "prompt" ? "30%" : "-5%")};
  top: ${({ showSlide }) => showSlide && "-5%"};
  transition: top 1s ease-in-out;
`;

const PromptMsgWrapper = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 23.0625rem;
  z-index: 1;
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1rem;
  background-color: #6d6d6d;
  z-index: 9;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #fff;
  transition: width 1s linear;
`;

const Slide = styled.div`
  animation: ${slideUpDown} 3s forwards;
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
`;

const StyledTextarea = styled.textarea`
  width: 23.1875rem;
  height: 16rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  border: 2px solid #fff;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  color: #fff;
  font-size: 1.25rem;
  text-align: start;
  font-family: "VitroPride";
  outline: none;
  resize: none; /* 사용자가 크기 조절 못하게 함 */
  padding: 1.3rem; /* 내부 여백 추가 */
  margin-top: 1rem; /* 추가된 스타일 */
  ::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;

const CharacterCount = styled.div`
  color: #fff;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-right: 2rem;
  margin-left: auto;
`;
