import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import useCustomNavigate from 'hooks/useCustomNavigate';
import FormButton from 'components/form/FormButton';
import FormLayout from 'components/form/FormLayout';
import { useSignupMutation } from 'store/api/users.api';
import { SIGNUP_FIELDS, SignupFormData } from './signup.config';
import { useDispatch } from 'react-redux';
import { showToast } from 'store/slice/toast.slice';

const { ESSENTIAL, OPTIONAL, AGREEMENT } = SIGNUP_FIELDS;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const Notice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.grayDark};
`;

const SignUp = () => {
  const navigate = useCustomNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<SignupFormData>({ mode: 'onBlur', shouldFocusError: true });
  
  const [signup, { isLoading }] = useSignupMutation();

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    if (!data.agreement) {
      dispatch(showToast({ message: '동의사항을 체크해주세요.', type: 'error' }));
      return;
    }
    try {
      await signup(data).unwrap();
      dispatch(showToast({ message: '회원가입이 완료되었습니다.', type: 'success' }));
      navigate('/login');
    } catch (error) {
      const customError = error as { status: number; data: { error: string } };
      const errorMessage = customError?.data?.error;
      switch (customError.status) {
        case 409:
          setError('email', { message: errorMessage }, { shouldFocus: true });
          break;
        default:
          dispatch(showToast({ message: errorMessage, type: 'error' }));
      }
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title="회원가입">
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
          <field.component
            key={field.id}
            label={field.label}
            registerOptions={register(field.id)}
            content={field.content}
          />
        ))}
        <FormButton disabled={isLoading}>가입 완료</FormButton>
        <FormButton variant="secondary" type="button" onClick={() => navigate('/login')}>
          로그인
        </FormButton>
      </Fieldset>
    </FormLayout>
  );
};

export default SignUp;
