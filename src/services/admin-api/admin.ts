import { DeleteUser, NewUserData } from '@/services/admin-api/admin.types'
import { baseApi } from '@/services/base-api/base-api'

export const adminAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      addUser: builder.mutation<NewUserData, {}>({
        query: args => {
          return {
            args,
            method: 'POST',
            url: `/v1/users`,
          }
        },
      }),
      deleteAllUsers: builder.mutation({
        query: () => {
          return {
            method: 'DELETE',
            url: `/v1/users`,
          }
        },
      }),
      deleteUser: builder.mutation<DeleteUser, {}>({
        query: (id: string) => {
          return {
            method: 'DELETE',
            url: `/v1/users/${id}`,
          }
        },
      }),
      getAllUsers: builder.query({
        query: () => `/v1/users`,
      }),
    }
  },
})

export const {} = adminAPI
