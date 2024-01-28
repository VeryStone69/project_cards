import {
  LoginData,
  LoginResponse,
  RegisterData,
  UserResponse,
} from '@/services/auth-api/auth.types'
import { baseApi } from '@/services/base-api/base-api'

export const authAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginData>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/login`,
        }),
      }),
      me: builder.query<{ success: boolean } | UserResponse | null, void>({
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
      register: builder.mutation<UserResponse, RegisterData>({
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/sign-up`,
        }),
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery, useRegisterMutation } = authAPI
