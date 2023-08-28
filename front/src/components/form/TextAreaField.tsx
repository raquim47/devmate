import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 10px 20px 15px;
  border-radius: 4px;
  background-color: #f8f8f8;
  border: 1px solid #d8d8d8;
  margin-bottom: 10px;

  label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 12px;
    color: #919191;
    pointer-events: none;
  }

  textarea {
    background-color: #f8f8f8;
    border: none;
    font-size: 16px;
    outline: none;
    height: 100px;
    resize: none;
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
