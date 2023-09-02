import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetMeResponse {
  isAuth: boolean;
  isAdmin?: boolean;
  _id?: string;
  email?: string;
  name?: string;
  imgUrl?: string;
  location?: string;
  introduce?: string;
  position?: string[];
}

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  email: string;
  username: string;
  password: string;
}

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/users', credentials: 'include' }),
  endpoints: (builder) => ({
    getMe: builder.query<ApiResponse<GetMeResponse>, void>({
      query: () => 'me',
    }),
    login: builder.mutation<ApiResponse<void>, LoginRequest>({
      query: (data: LoginRequest) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),
    signup: builder.mutation<ApiResponse<void>, SignupRequest>({
      query: (data: SignupRequest) => ({
        url: 'signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useSignupMutation } = usersApi;
