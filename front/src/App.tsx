import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Router from './routes';

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Router />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
