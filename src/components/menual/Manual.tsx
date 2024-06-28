import { manualOpenState } from "@/recoils/atoms";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const Manual = () => {
  const [manualState, setManualState] = useRecoilState(manualOpenState);
  return (
    <Container>
      <TitleWrapper>재난 생존기 설명서</TitleWrapper>
      <DesWrapper>
        재난 생존기를 시작하면 랜덤의 재난 상황이 제시됩니다. <br /> 주어진 재난
        상황에 대하여 60초 내에 생존 전략을 작성해주세요. <br />
        작성한 생존 전략을 평가 받고 자신의 생존 여부를 확인해보세요! <br />
        꼭, 살아남으시길 바랍니다!
      </DesWrapper>
      <CloseBtn onClick={() => setManualState(!manualState)}>확인</CloseBtn>
    </Container>
  );
};

export default Manual;

const Container = styled.div`
  width: 23.1875rem;
  height: 36.25rem;
  border-radius: 1.25rem;
  background: rgba(227, 227, 227, 0.73);
  z-index: 20;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.h1`
  color: #131010;
  font-family: "VitroCore";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 1.54rem;
`;
const DesWrapper = styled.h2`
  width: 21.0625rem;
  height: 22.25rem;
  color: #000;

  font-family: "VitroPride";
  font-size: 1.475rem;
  font-style: normal;
  line-height: 2.5rem;
  font-weight: 400;
`;

const CloseBtn = styled.div`
  width: 9.281rem;
  height: 3.8125rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6e6e6e;
  color: #fff;
  font-family: "VitroPride";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(110, 110, 110, 0.5);
  }
`;
