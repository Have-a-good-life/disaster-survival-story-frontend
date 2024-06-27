import styled from "styled-components";

const PrideTitleWhite = styled.h1`
  color: ${({ theme }) => theme.textStyles.prideTitleWhite.color};
  font-family: ${({ theme }) => theme.textStyles.prideTitleWhite.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.prideTitleWhite.fontSize};
  font-style: normal;
  font-weight: ${({ theme }) => theme.textStyles.prideTitleWhite.fontWeight};
  line-height: ${({ theme }) => theme.textStyles.prideTitleWhite.lineHeight};
`;

export default PrideTitleWhite;
