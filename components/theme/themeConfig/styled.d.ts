import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      navbarBg: string;
      navbarText: string;
    };
  }
}
