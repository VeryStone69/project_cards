import { GetDecks, GetDecksArgs } from '@/services/base-api.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecks, Partial<GetDecksArgs> | void>({
        query: arg => {
          return {
            method: 'GET',
            params: arg ?? {},
            url: `v1/decks`,
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetDecksQuery, useLazyGetDecksQuery } = baseApi
