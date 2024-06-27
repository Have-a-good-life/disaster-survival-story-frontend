import styled from "styled-components";

const CoreTitleWhite = styled.h1`
  color: ${({ theme }) => theme.textStyles.coreTitleWhite.color};
  font-family: ${({ theme }) => theme.textStyles.coreTitleWhite.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.coreTitleWhite.fontSize};
  font-style: normal;
  font-weight: ${({ theme }) => theme.textStyles.coreTitleWhite.fontWeight};
  line-height: ${({ theme }) => theme.textStyles.coreTitleWhite.lineHeight};
`;

export default CoreTitleWhite;
