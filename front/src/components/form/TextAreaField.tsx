import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 10px 20px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.grayLight};
  border: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: 10px;

  label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.color.grayDark};;
    pointer-events: none;
  }

  textarea {
    background-color: ${({ theme }) => theme.color.grayLight};
    border: none;
    height: 100px;
  }
`;

interface TextAreaFieldProps {
  label: string;
  registerOptions: UseFormRegisterReturn;
}

const TextAreaField = ({ label, registerOptions }: TextAreaFieldProps) => {
  return (
    <Wrapper>
      <label htmlFor={registerOptions.name}>{label}</label>
      <textarea id={registerOptions.name} {...registerOptions} />
    </Wrapper>
  );
};

export default TextAreaField;
