import { baseApi } from '@/services/base-api'
import { DeleteUser, NewUserData } from '@/services/admin/admin.types'

export const adminAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getAllUsers: builder.query({
        query: () => `/v1/users`,
      }),
      addUser: builder.mutation<NewUserData, {}>({
        query: args => {
          return {
            args,
            url: `/v1/users`,
            method: 'POST',
          }
        },
      }),
      deleteAllUsers: builder.mutation({
        query: () => {
          return {
            url: `/v1/users`,
            method: 'DELETE',
          }
        },
      }),
      deleteUser: builder.mutation<DeleteUser, {}>({
        query: (id: string) => {
          return {
            url: `/v1/users/${id}`,
            method: 'DELETE',
          }
        },
      }),
    }
  },
})

export const {
  useGetAllUsersQuery,
  useAddUserMutation,
  useDeleteAllUsersMutation,
  useDeleteUserMutation,
} = adminAPI
