const baseColors = {
  white: "#fff",
  blue: "#1e40af",
  blueLight: "#3b82f6",
  blueDark: "#2563eb",
  purple: "#a78bfa",
  purpleDark: "#a21caf",
  purpleMid: "#7c3aed",
  black: "#000",
  gray: "#f0f2f5",
  grayDark: "#6b7280",
  grayMid: "#4b5563",
  grayText: "#374151",
  grayLine: "#9ca3af",
  yellow: "#fbbf24",
  green: "#10b981",
  greenDark: "#059669",
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
    secondary: {
      blueLight: baseColors.blueLight,
      blueDark: baseColors.blueDark,
      purple: baseColors.purple,
      purpleDark: baseColors.purpleDark,
      purpleMid: baseColors.purpleMid,
      yellow: baseColors.yellow,
      green: baseColors.green,
      greenDark: baseColors.greenDark,
    },
    gray: {
      dark: baseColors.grayDark,
      mid: baseColors.grayMid,
      text: baseColors.grayText,
      line: baseColors.grayLine,
    },
    gradients: {
      bluePurple: `linear-gradient(90deg, ${baseColors.blueLight} 0%, ${baseColors.purple} 100%)`,
      bluePurpleDark: `linear-gradient(90deg, ${baseColors.blueDark} 0%, ${baseColors.purpleDark} 100%)`,
      bluePurpleMid: `linear-gradient(90deg, ${baseColors.blueDark} 0%, ${baseColors.purpleMid} 100%)`,
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
    secondary: {
      blueLight: baseColors.blueLight,
      blueDark: baseColors.blueDark,
      purple: baseColors.purple,
      purpleDark: baseColors.purpleDark,
      purpleMid: baseColors.purpleMid,
      yellow: baseColors.yellow,
      green: baseColors.green,
      greenDark: baseColors.greenDark,
    },
    gray: {
      dark: baseColors.grayDark,
      mid: baseColors.grayMid,
      text: baseColors.grayText,
      line: baseColors.grayLine,
    },
    gradients: {
      bluePurple: `linear-gradient(90deg, ${baseColors.blueLight} 0%, ${baseColors.purple} 100%)`,
      bluePurpleDark: `linear-gradient(90deg, ${baseColors.blueDark} 0%, ${baseColors.purpleDark} 100%)`,
      bluePurpleMid: `linear-gradient(90deg, ${baseColors.blueDark} 0%, ${baseColors.purpleMid} 100%)`,
    },
  },
};
