import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  gap: 40px;

  a,
  button {
    position: relative;
    color: ${(props) => props.theme.color.black.middle};
  }

  a:hover,
  button:hover {
    text-decoration: underline;
  }

  a::before,
  button::before {
    position: absolute;
    top: 10%;
    right: -19px;
    width: 1px;
    height: 70%;
    background-color: ${(props) => props.theme.color.black.light};
    content: '';
  }

  a:last-child::before,
  button:last-child::before {
    content: none;
  }
`;

let isLoggedIn = true;

const UserNav = () => {
  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
          <button>로그아웃</button>
        </>
      ) : (
        <>
          <Link to="/mypage">마이페이지</Link>
          <Link to="/logout">로그아웃</Link>
        </>
      )}
    </Wrapper>
  );
};

export default UserNav;
