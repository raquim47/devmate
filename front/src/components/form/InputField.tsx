import styled, { keyframes } from 'styled-components';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

const shake = keyframes`
  25% {
    transform: translateX(-1px);
  }
  75% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div<{ $hasError?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;

  label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.grayDark};
  }

  input {
    padding: 30px 10px 10px 15px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.color.grayLight};
    border: 1px solid ${({ theme }) => theme.color.border};
  }

  span {
    position: absolute;
    bottom: 0;
    left: 15px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.red};
    animation: ${shake} 0.2s;
  }
`;

interface InputFieldProps {
  label: string;
  id: string;
  registerOptions: UseFormRegisterReturn;
  type?: string;
  error?: FieldError;
  onClearError?: () => void;
  defaultValue?: string;
}

const InputField = ({
  label,
  type = 'text',
  error,
  registerOptions,
  onClearError,
  defaultValue = '',
}: InputFieldProps) => {
  const autoCompleteValue = type === 'password' ? 'off' : '';
  return (
    <Wrapper $hasError={!!error}>
      <label htmlFor={registerOptions.name}>{label}</label>
      <input
        {...registerOptions}
        type={type}
        id={registerOptions.name}
        onChange={onClearError}
        defaultValue={defaultValue}
        autoComplete={autoCompleteValue}
      />
      {error && <span role="alert">{error.message}</span>}
    </Wrapper>
  );
};

export default InputField;
