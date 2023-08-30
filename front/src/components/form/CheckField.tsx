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
    cursor: pointer;
  }
`;

const Content = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 20px;
`;

const ContentItem = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #919191;

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
  console.log(content);
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
