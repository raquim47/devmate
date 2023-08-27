import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const bgChangePaths = ['/login', '/signup'];

const Wrapper = styled.main<{ path: string }>`
  min-height: calc(100vh - 80px);
  background-color: ${(props) => (bgChangePaths.includes(props.path) ? '#F7F7F7' : '#FFF')};
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const { pathname } = useLocation();

  return (
    <Wrapper path={pathname}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export default Main;
