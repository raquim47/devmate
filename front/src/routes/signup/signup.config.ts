import { RegisterOptions } from 'react-hook-form';
import CheckboxField from 'components/form/CheckField';
import InputField from 'components/form/InputField';
import SelectField from 'components/form/SelectField';
import TextAreaField from 'components/form/TextAreaField';

export interface SignupFormData {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
  location?: string;
  job?: string;
  introduction?: string;
  agreement?: boolean;
}

interface SignupField {
  label: string;
  id: keyof SignupFormData;
  component: React.ElementType;
  type?: string;
  validation?: RegisterOptions<SignupFormData>;
  options?: string[];
  content?: {
    title?: string;  
    description: string;  
  }[];
}

interface SignupFields {
  [category: string]: SignupField[];
}

export const SIGNUP_FIELDS: SignupFields = {
  ESSENTIAL: [
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
      label: '이름',
      id: 'username',
      validation: {
        required: '이름을 입력해주세요',
        pattern: {
          value: /^.{3,}$/,
          message: '세 글자 이상 입력해주세요.',
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
    {
      label: '비밀번호 확인',
      id: 'passwordConfirm',
      type: 'password',
      validation: {
        required: '비밀번호 확인을 입력해주세요.',
        validate: (value, allValues) => value === allValues.password || '비밀번호가 일치하지 않습니다.',
      },
      component: InputField,
    },
  ],
  OPTIONAL: [
    {
      label: '지역',
      id: 'location',
      component: SelectField,
      // prettier-ignore
      options: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '강원', '경기', '경남', '경북', '전남', '전북', '충남', '충북', '제주'],
    },
    {
      label: '직군',
      id: 'job',
      component: SelectField,
      options: ['프론트엔드', '백엔드', '디자인', '기획'],
    },
    {
      label: '소개',
      id: 'introduction',
      component: TextAreaField,
    },
  ],
  AGREEMENT: [
    {
      label: '(필수) 개인정보 수집 및 이용 동의',
      id: 'agreement',
      component: CheckboxField,
      content: [
        { title: "목적", description: "이용자 식별 및 본인 여부 확인" },
        { title: "항목", description: "성명, 휴대전화, 이메일, 비밀번호" },
        { title: "보유기간", description: "회원 탈퇴 시 파기" },
      ],
    },
  ],
};
