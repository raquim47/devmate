import styled from 'styled-components';
import LogoIcon from '../logo/LogoIcon';
import LogoText from '../logo/LogoText';
import UserNav from './UserNav';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
`;

const HeaderLogo = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderLogo>
        <LogoIcon />
        <LogoText />
      </HeaderLogo>
      <UserNav />
    </Wrapper>
  );
};

export default Header;
