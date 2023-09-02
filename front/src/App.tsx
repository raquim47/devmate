import { useGetMeQuery } from 'store/api/users.api';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Router from './routes';

const App = () => {
  const { data: userData, error } = useGetMeQuery();
  console.log(userData,error);
  return (
    <>
      <Header />
      <Main>
        <Router />
      </Main>
      <Footer />
    </>
  );
};

export default App;
