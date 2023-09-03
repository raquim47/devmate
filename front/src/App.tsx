import CheckIcon from 'components/icon/CheckIcon';
import XIcon from 'components/icon/XIcon';
import Toast from 'components/utils/Toast';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Router from './routes';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Router />
      </Main>
      <Footer />
      <Toast />
    </>
  );
};

export default App;
