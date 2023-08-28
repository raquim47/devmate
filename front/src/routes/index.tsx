import { Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import SignUp from './signup/SignUp';

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={HomePage} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
