import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 0;

  &.primary {
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      background-color: ${({ theme }) => theme.color.blueDark};
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.grayDark};

    &:hover {
      background-color: ${({ theme }) => theme.color.grayLight};
      color: ${({ theme }) => theme.color.defaultText};
    }
  }
`;

interface FormButtonProps {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const FormButton = ({ variant = 'primary', type = 'submit', onClick, children }: FormButtonProps) => {
  return (
    <Button className={variant} type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default FormButton;
