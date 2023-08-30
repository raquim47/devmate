import { RegisterOptions } from 'react-hook-form';
import InputField from 'components/form/InputField';

export interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFieldInfo {
  label: string;
  id: keyof LoginFormData;
  component: React.ElementType;
  type?: string;
  validation?: RegisterOptions<LoginFormData>;
  options?: string[];
}

export const LOGIN_FIELDS: LoginFieldInfo[] = [
  {
    label: '이메일',
    id: 'email',
    type: 'email',
    validation: {
      required: '이메일을 입력해주세요',
      pattern: {
        value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
        message: '이메일이 형식에 맞지 않습니다',
      },
    },
    component: InputField,
  },
  {
    label: '비밀번호',
    id: 'password',
    type: 'password',
    validation: {
      required: '비밀번호를 입력해주세요',
    },
    component: InputField,
  },
];
