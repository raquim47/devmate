import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  // color
  color: {
    black: {
      light: '#ddd',
      middle: '#333',
      normal: '#000',
    },
    white: {
      dark: '#d4d7db',
      normal: '#fff',
    },
    gray: '#303133',
    red: '#ea726f',
    blue: {
      dark: '#191D37',
      normal: '#338BFD',
      light: '#99B8FE',
    },
    border: {
      lightGray: '#f0f0f0',
    },
  },

  // fontSize
  fontSizeVw: {
    xs: '0.8vw',
    s: '1.2vw',
    m: '1.6vw',
    l: '2vw',
    xl: '2.5vw',
    xxl: '3vw',
    '3xl': '4vw',
    '4xl': '6vw',
  },
  fontSizePx: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '24px',
    xxl: '28px',
    '3xl': '32px',
    '4xl': '36px',
  },
  zIndex: {
    modal: 10,
  },
};
