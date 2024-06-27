const colors = {
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(0, 0, 0, 1)",
  gray: "#6E6E6E",
  transparentWhite: "rgba(255, 255, 255, 0)",
  red: "rgba(166, 0, 0, 1)",
  darkRed: "#CA0D0D",
  lightGreen: "#29CC61",
  semiTransparentBlack: "rgba(0, 0, 0, 0.21)",
  darkBrown: "#311212",
};

const fonts = {
  VitroCore: "VitroCore, sans-serif",
  VitroPride: "VitroPride, sans-serif",
  Pretendard: "Pretendard, sans-serif",
};

const textStyles = {
  prideTitleWhite: {
    color: colors.white,
    fontFamily: fonts.VitroPride,
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: "normal",
  },
  coreTitleWhite: {
    color: colors.white,
    fontFamily: fonts.VitroCore,
    fontSize: "4rem",
    fontWeight: 900,
    lineHeight: "normal",
  },
  prideTitleBlack: {
    color: colors.black,
    fontFamily: fonts.VitroPride,
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: "normal",
  },
  centerRedStroke: {
    color: colors.white,
    textAlign: "center",
    WebkitTextStrokeWidth: "60px",
    WebkitTextStrokeColor: colors.darkRed,
    fontFamily: fonts.Pretendard,
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "normal",
  },
  centerBlackStroke: {
    color: colors.white,
    textAlign: "center",
    WebkitTextStrokeWidth: "60px",
    WebkitTextStrokeColor: colors.black,
    fontFamily: fonts.Pretendard,
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "normal",
  },
  centerTransparentBlackStroke: {
    color: colors.white,
    textAlign: "center",
    WebkitTextStrokeWidth: "60px",
    WebkitTextStrokeColor: colors.semiTransparentBlack,
    fontFamily: fonts.Pretendard,
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "normal",
  },
  centerDarkBrownStroke: {
    color: colors.white,
    textAlign: "center",
    WebkitTextStrokeWidth: "60px",
    WebkitTextStrokeColor: colors.darkBrown,
    fontFamily: fonts.Pretendard,
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "normal",
  },
  coreTitleTransparent: {
    color: colors.transparentWhite,
    WebkitTextStrokeWidth: "15px",
    WebkitTextStrokeColor: colors.white,
    fontFamily: fonts.VitroCore,
    fontSize: "1.5rem",
    fontWeight: 900,
    lineHeight: "normal",
  },
  coreTitleMedium: {
    color: colors.transparentWhite,
    WebkitTextStrokeWidth: "15px",
    WebkitTextStrokeColor: colors.white,
    fontFamily: fonts.VitroCore,
    fontSize: "1.125rem",
    fontWeight: 900,
    lineHeight: "normal",
  },
  coreTitleLarge: {
    color: colors.transparentWhite,
    WebkitTextStrokeWidth: "15px",
    WebkitTextStrokeColor: colors.white,
    fontFamily: fonts.VitroCore,
    fontSize: "1.25rem",
    fontWeight: 900,
    lineHeight: "normal",
  },
  centerRedStrokeLarge: {
    color: colors.red,
    textAlign: "center",
    WebkitTextStrokeWidth: "15px",
    WebkitTextStrokeColor: colors.white,
    fontFamily: fonts.VitroCore,
    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: "normal",
  },
  centerGreenStrokeExtraLarge: {
    color: colors.lightGreen,
    textAlign: "center",
    WebkitTextStrokeWidth: "15px",
    WebkitTextStrokeColor: colors.white,
    fontFamily: fonts.VitroCore,
    fontSize: "6rem",
    fontWeight: 900,
    lineHeight: "normal",
  },
};

export const theme = {
  colors,
  fonts,
  textStyles,
};