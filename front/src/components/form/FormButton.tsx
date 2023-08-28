import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 0;
  border-radius: 4px;
  cursor: pointer;

  &.primary {
    background-color: #4195f5;
    color: #fff;

    &:hover {
      background-color: #187cee;
    }
  }

  &.secondary {
    background-color: #fff;
    border: 1px solid #d8d8d8;
    color: #919191;

    &:hover {
      background-color: #f8f8f8;
      color: #1a1d37;
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
