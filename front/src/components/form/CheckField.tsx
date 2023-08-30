import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

const Wrapper = styled.div`
  position: relative;

  .inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input[type='checkbox'] {
    border: 1px solid ${({ theme }) => theme.color.border};
    width: 18px;
    height: 18px;
    cursor: pointer;
    outline: none;

    &:checked {
      accent-color: ${({ theme }) => theme.color.blue};
    }
  }

  label {
    font-size:${({ theme }) => theme.fontSize.s};
    cursor: pointer;
  }
`;

const Content = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.color.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
`;

const ContentItem = styled.div`
  display: flex;
  gap: 10px;
  font-size:${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.grayDark};

  dt {
    width: 80px;
  }
`;

interface CheckboxFieldProps {
  label: string;
  registerOptions: UseFormRegisterReturn;
  content?: {
    title?: string;
    description: string;
  }[];
}

const CheckboxField = ({ label, registerOptions, content }: CheckboxFieldProps) => {
  return (
    <Wrapper>
      <div className="inner">
        <input type="checkbox" id={registerOptions.name} {...registerOptions} />
        <label htmlFor={registerOptions.name}>{label}</label>
      </div>
      {content && (
        <Content>
          {content.map((item, i) => (
            <ContentItem key={i}>
              {item.title && <dt>{item.title}</dt>}
              <dd>{item.description}</dd>
            </ContentItem>
          ))}
        </Content>
      )}
    </Wrapper>
  );
};

export default CheckboxField;
