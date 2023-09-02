import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  font-weight: 400;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.defaultText};
}

body.scrollHidden {
  overflow-y: hidden;
}

a {
  text-decoration:none;
  color:inherit;
}

button {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
  border: none;
  font-weight: 400;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  border-radius: ${({ theme }) => theme.borderRadius};
}

input,textarea {
  font-family: 'Source Sans Pro', sans-serif;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: ${({ theme }) => theme.borderRadius};
}

textarea {
  resize: none;
}
`;