import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'store';
import { clearToast } from 'store/slice/toast.slice';
import CheckIcon from 'components/icon/CheckIcon';
import XIcon from 'components/icon/XIcon';

const Wrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.25s ease-in-out;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  z-index: ${({ theme }) => theme.zIndex.toast};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 300px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Icon = styled.div<{ $type: 'error' | 'success' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: ${({ theme, $type }) => {
    switch ($type) {
      case 'error':
        return theme.color.red;
      case 'success':
        return theme.color.blue;
    }
  }};
  border-radius: 50%;
  svg {
    fill: ${({ theme }) => theme.color.white};
  }
`;

const Message = styled.p`
  flex: 1;
  white-space: pre-line;
  font-size: ${({theme}) => theme.fontSize.s};
`

const Toast = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state: RootState) => state.toast);
  const [isVisible, setIsVisible] = useState(!!message);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2750);

      timerRef.current = setTimeout(() => {
        dispatch(clearToast());
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [message]);

  return (
    <Wrapper $isVisible={isVisible}>
      {message && (
        <Content>
          <Icon $type={type || 'success'}>
            {(() => {
              switch (type) {
                case 'error':
                  return <XIcon />;
                case 'success':
                default:
                  return <CheckIcon />;
              }
            })()}
          </Icon>
          <Message>{message}</Message>
        </Content>
      )}
    </Wrapper>
  );
};

export default Toast;
