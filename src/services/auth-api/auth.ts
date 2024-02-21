import {
  LoginData,
  LoginResponse,
  RegisterData,
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
  useRegisterMutation,
  useUpdateProfileMutation,
} = authAPI
