import { SubmitHandler, useForm } from 'react-hook-form';
import useCustomNavigate from 'hooks/useCustomNavigate';
import FormButton from 'components/form/FormButton';
import FormLayout from 'components/form/FormLayout';
import { useGetMeQuery, useLoginMutation } from 'store/api/users.api';
import { LoginFormData, LOGIN_FIELDS } from './login.config';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<LoginFormData>({ mode: 'onBlur' });
  const navigate = useCustomNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { refetch, data: userData } = useGetMeQuery();
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await login(data).unwrap();
      refetch();
      navigate('/');
    } catch (error) {
      const customError = error as { status: number; data: { error: string } };
      const errorMessage = customError.data.error;
      if (customError.status === 404) {
        setError('email', { message: errorMessage }, { shouldFocus: true });
      } else if (customError.status === 401) {
        setError('password', { message: errorMessage }, { shouldFocus: true });
      } else {
        console.log('로그인에 실패했습니다.');
      }
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title="로그인">
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
      <FormButton disabled={isLoading}>로그인</FormButton>
      <FormButton variant="secondary" type="button" onClick={() => navigate('/signup')}>
        회원가입
      </FormButton>
    </FormLayout>
  );
};

export default Login;
