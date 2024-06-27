import React from "react";
import situMsg from "@/assets/images/situMsg.png";
import { styled } from "styled-components";
import backgroundImg from "@/assets/images/promptbg.png";

const Prompt = () => {
  return (
    <Container>
      <MsgImg src={situMsg} />
      <PromptWrapper>
        <PromptMsgWrapper>
          메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥메시쥥
        </PromptMsgWrapper>
      </PromptWrapper>
    </Container>
  );
};

export default Prompt;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MsgImg = styled.img`
  margin-bottom: 3rem;
  object-fit: contain;
`;

const PromptWrapper = styled.div`
  background-image: url(${backgroundImg});
  width: 32.73688rem;
  height: 23.5625rem;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
