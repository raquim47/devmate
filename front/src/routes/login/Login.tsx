import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FormButton from '../../components/form/FormButton';
import { LoginFormData, LOGIN_FIELDS } from './login.config';

const Wrapper = styled.div`
  border: 1px solid #d8d8d8;
  min-width: 600px;
  padding: 50px 50px 70px;
  background-color: #fff;
  border-radius: 4px;

  h2 {
    color: #1a1d37;
    font-size: 30px;
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<LoginFormData>({ mode: 'onBlur' });

  const onSubmit = () => {};
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        {LOGIN_FIELDS.map((field) => (
          <field.component
            key={field.id}
            label={field.label}
            type={field.type}
            registerOptions={register(field.id, field.validation)}
            error={errors[field.id]}
            onClearError={() => clearErrors(field.id)}
          />
        ))}
        <FormButton>로그인</FormButton>
        <FormButton variant="secondary" type="button" onClick={() => navigate('/signup')}>
          회원가입
        </FormButton>
      </Form>
    </Wrapper>
  );
};

export default Login;
