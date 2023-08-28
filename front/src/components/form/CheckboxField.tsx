import styled, { keyframes } from 'styled-components';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

const Wrapper = styled.div`
  position: relative;

  .inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input[type='checkbox'] {
    background-color: #f8f8f8;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    outline: none;

    &:checked {
      background-color: #1a1d37;
    }
  }

  label {
    font-size: 14px;
  }
`;

interface CheckboxFieldProps {
  label: string;
  registerOptions: UseFormRegisterReturn;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, registerOptions }) => {
  return (
    <Wrapper>
      <div className="inner">
        <input type="checkbox" id={registerOptions.name} {...registerOptions} />
        <label htmlFor={registerOptions.name}>{label}</label>
      </div>
    </Wrapper>
  );
};

export default CheckboxField;
