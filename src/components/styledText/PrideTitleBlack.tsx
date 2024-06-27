import styled from "styled-components";

const PrideTitleBlack = styled.h1`
  color: ${({ theme }) => theme.textStyles.prideTitleBlack.color};
  font-family: ${({ theme }) => theme.textStyles.prideTitleBlack.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.prideTitleBlack.fontSize};
  font-style: normal;
  font-weight: ${({ theme }) => theme.textStyles.prideTitleBlack.fontWeight};
  line-height: ${({ theme }) => theme.textStyles.prideTitleBlack.lineHeight};
`;

export default PrideTitleBlack;
