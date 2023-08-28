import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FormButton from '../../components/form/FormButton';
import { SIGNUP_FIELDS, SignupFormData } from './signup.config';
const { ESSENTIAL, OPTIONAL, AGREEMENT } = SIGNUP_FIELDS;

const Wrapper = styled.div`
  border: 1px solid #d8d8d8;
  min-width: 600px;
  padding: 50px 50px 70px;
  background-color: #fff;
  border-radius: 4px;

  h2 {
    margin-bottom: 50px;
    color: #1a1d37;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const Notice = styled.p`
  font-size: 14px;
  color: #919191;
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<SignupFormData>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    if (!data.agreement) {
      console.log('동의사항에 동의해!');
      return;
    }

    console.log(data);
  };

  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>회원가입</h2>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Fieldset>
          <h3>필수 정보</h3>
          {ESSENTIAL.map((field) => (
            <field.component
              key={field.id}
              label={field.label}
              type={field.type}
              registerOptions={register(field.id, field.validation)}
              error={errors[field.id]}
              onClearError={() => clearErrors(field.id)}
            />
          ))}
        </Fieldset>
        <Fieldset>
          <h3>선택 정보</h3>
          {OPTIONAL.map((field) => (
            <field.component
              key={field.id}
              label={field.label}
              type={field.type}
              options={field.options}
              registerOptions={register(field.id)}
            />
          ))}
          <Notice>※ 선택 정보는 입력하지 않아도 가입이 가능합니다.</Notice>
        </Fieldset>
        <Fieldset>
          {AGREEMENT.map((field) => (
            <field.component key={field.id} label={field.label} registerOptions={register(field.id)} />
          ))}
          <FormButton>가입 완료</FormButton>
          <FormButton variant="secondary" type="button" onClick={() => navigate('/login')}>
            로그인
          </FormButton>
        </Fieldset>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
