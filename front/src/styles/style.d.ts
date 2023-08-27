import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: {
        light: string;
        middle: string;
        normal: string;
      };
      white: {
        dark: string;
        normal: string;
      };
      gray: string;
      red : string;
      blue: {
        dark: string;
        normal: string;
        light: string;
      };
    };

    fontSizeVw: {
      [key: string]: string;
    };
    fontSizePx: {
      [key: string]: string;
    };
    zIndex: {
      modal: number;
    };
  }
}
