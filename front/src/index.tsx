import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/grobal.style';
import { theme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
