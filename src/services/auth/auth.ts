import { LoginData, RegisterData, User } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, LoginData>({
        invalidatesTags: ['Me'],
        query: body => {
          return {
            body,
            method: 'POST',
            url: `/v1/auth/login`,
          }
        },
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
      register: builder.mutation<User, RegisterData>({
        query: arg => {
          return {
            arg,
            method: 'POST',
            url: `/v1/auth/sign-up`,
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery, useRegisterMutation } = authAPI
