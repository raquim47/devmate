import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const customNavigate = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return customNavigate;
};

export default useCustomNavigate;
