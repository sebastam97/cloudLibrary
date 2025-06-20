import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      navbarBg: string;
      navbarText: string;
      background: string;
      text: string;
      icon: string;
      primary: {
        DEFAULT: string;
        foreground: string;
      };
      secondary: {
        blueLight: string;
        blueDark: string;
        purple: string;
        purpleDark: string;
        purpleMid: string;
        yellow: string;
        green: string;
        greenDark: string;
      };
      gray: {
        dark: string;
        mid: string;
        text: string;
        line: string;
      };
      gradients: {
        bluePurple: string;
        bluePurpleDark: string;
        bluePurpleMid: string;
      };
    };
  }
}
