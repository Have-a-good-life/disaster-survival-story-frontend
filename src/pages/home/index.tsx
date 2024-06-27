import React from "react";
import GuideButton from "@/components/button/GuideButton";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";
import mainCharacter from "@/assets/images/mainCharacter.png";
import PrideTitleWhite from "@/components/styledText/PrideTitleWhite";
import CoreTitleWhite from "@/components/styledText/CoreTitleWhite";
import { useNavigate } from "react-router-dom";
import paths from "@/constants/paths";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(paths.splash);
  };

  return (
    <Container>
      <TitleWrapper>
        <PrideTitleWhite>재난 발생, 재난 발생,</PrideTitleWhite>
        <CoreTitleWhite>재난 생존기</CoreTitleWhite>
        <RightAlign>
          <PrideTitleWhite>by ChatGPT</PrideTitleWhite>
        </RightAlign>
      </TitleWrapper>
      <MainCharacterImg src={mainCharacter} />
      <ButtonWrapper>
        <GuideButton
          label="시작하기"
          labelColor={theme.colors.black}
          onClick={handleClick}
          backgroundColor={theme.colors.white}
          hoverColor="rgba(255, 255, 255, 0.50)"
        />
        <GuideButton
          label="재난 생존기 설명서"
          labelColor={theme.colors.white}
          onClick={handleClick}
          backgroundColor={theme.colors.gray}
          hoverColor="rgba(110, 110, 110, 0.50)"
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div``;

const RightAlign = styled.div`
  text-align: right;
`;

const MainCharacterImg = styled.img`
  width: 18.8125rem;
  height: 23.1875rem;
  object-fit: contain;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
