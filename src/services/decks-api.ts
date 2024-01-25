import { baseApi } from '@/services/base-api'
import { DeleteDecks, GetDecks, GetDecksArgs } from '@/services/decks-api.types'

export const decksAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      deleteDeck: builder.mutation<DeleteDecks, { id: string }>({
        query: arg => {
          return {
            body: arg.id,
            method: 'DELETE',
            url: `v1/decks/${arg.id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecks, Partial<GetDecksArgs> | void>({
        query: arg => {
          return {
            method: 'GET',
            params: arg ?? {},
            url: `v2/decks`,
          }
        },
      }),
    }
  },
})

export const { useDeleteDeckMutation, useGetDecksQuery, useLazyGetDecksQuery } = decksAPI
