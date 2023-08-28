import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoIcon from '../icon/LogoIcon';
import LogoText from '../icon/LogoText';
import UserNav from './UserNav';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
`;

const HeaderLogo = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <HeaderLogo>
          <LogoIcon />
          <LogoText />
        </HeaderLogo>
      </Link>
      <UserNav />
    </Wrapper>
  );
};

export default Header;
