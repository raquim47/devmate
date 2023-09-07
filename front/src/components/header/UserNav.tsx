import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetMeQuery, useLogoutMutation } from 'store/api/users.api';
import { showToast } from 'store/slice/toast.slice';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  gap: 40px;

  a,
  button {
    position: relative;
  }

  a:hover,
  button:hover {
    text-decoration: underline;
  }

  a:not(:last-child)::before,
  button:not(:last-child)::before {
    position: absolute;
    top: 10%;
    right: -19px;
    width: 1px;
    height: 70%;
    background-color: ${(props) => props.theme.color.border};
    content: '';
  }
`;

const UserNav = () => {
  const { data: userData, isLoading } = useGetMeQuery();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await logout().unwrap();
      window.location.assign('/');
    } catch (error) {
      const customError = error as { status: number; data: { error: string } };
      const errorMessage = customError?.data?.error;
      dispatch(showToast({ message: errorMessage, type: 'error' }));
    }
  };

  return (
    <Wrapper>
      {!isLoading &&
        (userData?.data?.isAuth ? (
          <>
            <Link to="/mypage">마이페이지</Link>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        ))}
    </Wrapper>
  );
};

export default UserNav;
