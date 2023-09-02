import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  min-width: 600px;
  padding: 50px 50px 70px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

interface FormLayoutProps {
  onSubmit: (event: React.FormEvent) => void;
  title?: string;
  children: React.ReactNode;
}

const FormLayout = ({ onSubmit, children, title }: FormLayoutProps) => {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      <Form onSubmit={onSubmit}>{children}</Form>
    </Wrapper>
  );
};

export default FormLayout;
