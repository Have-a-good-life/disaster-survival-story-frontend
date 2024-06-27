import BlurInput from "@/components/blurInput/BlurInput";
import React, { useState } from "react";
import { styled } from "styled-components";
import youImg from "@/assets/images/youMsg.png";
import avartarImg from "@/assets/images/avartarCharacter.png";
import surviveIcon from "@/assets/images/surviveIcon.png";
import dieIcon from "@/assets/images/dieIcon.png";
import GuideButton from "@/components/button/GuideButton";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";

const Result = () => {
  const [life, setLife] = useState<"survive" | "die" | "">("die");
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(paths.final);
  };
  return (
    <Container>
      <HeaderWrapper>
        <YouImg src={youImg} />
        <AvartarImg src={avartarImg} />
      </HeaderWrapper>
      <BlurInput text="테스트 텍스트" />
      {life === "survive" ? (
        <SurviveImg src={surviveIcon} />
      ) : life === "die" ? (
        <DieImg src={dieIcon} />
      ) : (
        <></>
      )}
      <GuideButton
        label={"다음"}
        labelColor={theme.colors.black}
        onClick={handleBtnClick}
        backgroundColor={theme.colors.white}
        hoverColor="rgba(255, 255, 255, 0.50)"
      />
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
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const DieImg = styled.img`
  width: 17.1875rem;
  height: 6.875rem;
  object-fit: contain;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
