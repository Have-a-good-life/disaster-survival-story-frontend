import styled from "styled-components";

const CoreTitleTransparent = styled.h1`
  color: ${({ theme }) => theme.textStyles.coreTitleTransparent.color};
  -webkit-text-stroke-width: ${({ theme }) =>
    theme.textStyles.coreTitleTransparent.webkitTextStrokeWidth};
  -webkit-text-stroke-color: ${({ theme }) =>
    theme.textStyles.coreTitleTransparent.webkitTextStrokeColor};
  font-family: ${({ theme }) =>
    theme.textStyles.coreTitleTransparent.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.coreTitleTransparent.fontSize};
  font-style: normal;
  font-weight: ${({ theme }) =>
    theme.textStyles.coreTitleTransparent.fontWeight};
  line-height: ${({ theme }) =>
    theme.textStyles.coreTitleTransparent.lineHeight};
`;

export default CoreTitleTransparent;
