import {
  LoginData,
  LoginResponse,
  RecoverPassword,
  RegisterData,
  ResetPassword,
  UpdateProfile,
  UserResponse,
} from '@/services/auth-api/auth.types'
import { baseApi } from '@/services/base-api/base-api'

export const authAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      logOut: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(authAPI.util.updateQueryData('me', undefined, () => null))

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
        query: () => ({
          method: 'POST',
          url: `/v1/auth/logout`,
        }),
      }),
      login: builder.mutation<LoginResponse, LoginData>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/login`,
        }),
      }),
      me: builder.query<UserResponse | null, void>({
        extraOptions: {
          maxRetries: 0,
        },
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
      recoverPassword: builder.mutation<void, RecoverPassword>({
        query: body => ({
          body,
          method: 'POST',
          url: `v1/auth/recover-password`,
        }),
      }),
      register: builder.mutation<UserResponse, RegisterData>({
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/sign-up`,
        }),
      }),
      resetPassword: builder.mutation<void, { data: ResetPassword; token: string }>({
        query: ({ token, ...data }) => ({
          body: data.data,
          method: 'POST',
          url: `v1/auth/reset-password/${token}`,
        }),
      }),
      updateProfile: builder.mutation<UserResponse, UpdateProfile>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'PATCH',
          url: `v1/auth/me`,
        }),
      }),
    }
  },
})

export const {
  useLogOutMutation,
  useLoginMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useRegisterMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
} = authAPI
