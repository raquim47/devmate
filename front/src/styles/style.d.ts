import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      defaultText: string;
      gray: string;
      grayLight: string;
      grayDark: string;
      black: string;
      white: string;
      border: string;
      red: string;
      blue: string;
      blueDark: string;
    };

    fontSize: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    zIndex: {
      dropDown: number;
      toast: number;
    };
    boxShadow: string;
    borderRadius: string;
  }
}
