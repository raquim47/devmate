import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  // color
  color: {
    defaultText : '#1a1d37',
    gray:'#333',
    grayLight : '#f8f8f8',
    grayDark : '#919191',

    black: '#000',
    white: '#fff',

    border : '#d8d8d8',
    red: '#ea726f',
    
    blue: '#4195f5',
    blueDark: '#187cee',
  },

  // fontSize
  fontSize: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '30px',
    xxl: '36px',
  },
  zIndex: {
    dropDown: 1,
    toast: 10,
  },
  boxShadow : '0px 4px 10px rgba(0, 0, 0, 0.15)',
  borderRadius : '4px',
};
