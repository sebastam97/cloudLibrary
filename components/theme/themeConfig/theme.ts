const baseColors = {
  white: "#fff",
  blue: "#1e40af",
  black: "#000",
  gray: "#f0f2f5",
};

export const lightTheme = {
  colors: {
    navbarBg: baseColors.gray,
    navbarText: baseColors.black,
    background: baseColors.white,
    text: baseColors.black,
    icon: baseColors.black,
    primary: {
      DEFAULT: baseColors.blue,
      foreground: baseColors.white,
    },
  },
};

export const darkTheme = {
  colors: {
    navbarBg: baseColors.blue,
    navbarText: baseColors.white,
    background: baseColors.black,
    text: baseColors.white,
    icon: baseColors.white,
    primary: {
      DEFAULT: baseColors.white,
      foreground: baseColors.black,
    },
  },
};
