import styled from "styled-components";

const CenterBlackStroke = styled.h1`
  color: ${({ theme }) => theme.textStyles.centerBlackStroke.color};
  text-align: ${({ theme }) => theme.textStyles.centerBlackStroke.textAlign};
  -webkit-text-stroke-width: ${({ theme }) =>
    theme.textStyles.centerBlackStroke.WebkitTextStrokeWidth};
  -webkit-text-stroke-color: ${({ theme }) =>
    theme.textStyles.centerBlackStroke.WebkitTextStrokeColor};
  font-family: ${({ theme }) => theme.textStyles.centerBlackStroke.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.centerBlackStroke.fontSize};
  font-style: normal;
  font-weight: ${({ theme }) => theme.textStyles.centerBlackStroke.fontWeight};
  line-height: ${({ theme }) => theme.textStyles.centerBlackStroke.lineHeight};
`;

export default CenterBlackStroke;
