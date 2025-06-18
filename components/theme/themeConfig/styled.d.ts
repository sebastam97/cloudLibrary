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
    };
  }
}
