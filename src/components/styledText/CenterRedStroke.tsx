import styled from "styled-components";

const CenterRedStroke = styled.h1`
  color: ${({ theme }) => theme.textStyles.centerRedStroke.color};
  text-align: ${({ theme }) => theme.textStyles.centerRedStroke.textAlign};
  -webkit-text-stroke-width: ${({ theme }) =>
    theme.textStyles.centerRedStroke.webkitTextStrokeWidth};
  -webkit-text-stroke-color: ${({ theme }) =>
    theme.textStyles.centerRedStroke.webkitTextStrokeColor};
  font-family: ${({ theme }) => theme.textStyles.centerRedStroke.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.centerRedStroke.fontSize};
  font-style: normal;
  font-weight: ${({ theme }) => theme.textStyles.centerRedStroke.fontWeight};
  line-height: ${({ theme }) => theme.textStyles.centerRedStroke.lineHeight};
`;

export default CenterRedStroke;
