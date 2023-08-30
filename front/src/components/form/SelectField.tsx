import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import ArrowIcon from 'components/icon/ArrowIcon';

const Wrapper = styled.div`
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
    background-color: ${({ theme }) => theme.color.grayLight};
    border: 1px solid ${({ theme }) => theme.color.border};
    cursor: pointer;
  }
`;

const DropdownButton = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 35px;
  right: 20px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(-5px) rotate(180deg)' : 'translateY(0) rotate(0)')};
  transition: transform 0.3s ease-in-out;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% - 20px);
  left: 0;
  width: 100%;
  max-height: 163px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndex.dropDown};
`;

const DropdownItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.grayLight};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 65px;
  bottom: 35px;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  color: ${({ theme }) => theme.color.grayDark};

  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

interface SelectFieldProps {
  id: string;
  label: string;
  options: string[];
  registerOptions: UseFormRegisterReturn;
}

const SelectField = ({ id, label, options, registerOptions }: SelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(`${label} 선택`);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  const handleSelect = (option: string) => {
    setSelectedValue(option);
    registerOptions.onChange({
      target: {
        value: option,
        name: registerOptions.name,
      },
    });
    setIsOpen(false);
  };

  const handleReset = () => {
    setSelectedValue(`${label} 선택`);
    registerOptions.onChange({
      target: {
        value: '',
        name: registerOptions.name,
      },
    });
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <Wrapper ref={dropdownRef}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} value={selectedValue} onClick={() => setIsOpen(!isOpen)} readOnly />
      {selectedValue !== `${label} 선택` && <ClearButton onClick={handleReset}>×</ClearButton>}
      <DropdownButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} type="button">
        <ArrowIcon />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Wrapper>
  );
};
export default SelectField;
