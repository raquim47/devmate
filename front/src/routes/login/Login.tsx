import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import useCustomNavigate from 'hooks/useCustomNavigate';
import FormButton from 'components/form/FormButton';
import FormLayout from 'components/form/FormLayout';
import { showToast } from 'store/slice/toast.slice';
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
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { refetch } = useGetMeQuery();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await login(data).unwrap();
      try {
        await refetch();
        dispatch(showToast({ message: '로그인이 완료되었습니다!', type: 'success' }));
        navigate('/');
      } catch (refetchError) {
        dispatch(showToast({ message: '데이터를 새로고침하는데 실패했습니다.\n다시 시도해주세요.', type: 'error' }));
      }
    } catch (error) {
      const customError = error as { status: number; data: { error: string } };
      const errorMessage = customError?.data?.error;
      switch (customError.status) {
        case 404:
          setError('email', { message: errorMessage }, { shouldFocus: true });
          break;
        case 401:
          setError('password', { message: errorMessage }, { shouldFocus: true });
          break;
        default:
          dispatch(showToast({ message: errorMessage, type: 'error' }));
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
