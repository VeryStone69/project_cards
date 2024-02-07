import { baseApi } from '@/services/base-api/base-api'
import { DecksItems, GetDecks, GetDecksArgs } from '@/services/decks-api/decks-api.types'

export const decksAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDecks: builder.mutation<DecksItems, FormData>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            params: arg,
            url: `v1/decks`,
          }
        },
      }),
      deleteDeck: builder.mutation<Omit<DecksItems, 'author'>, { id: string }>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return {
            body: arg.id,
            method: 'DELETE',
            url: `v1/decks/${arg.id}`,
          }
        },
      }),
      getDeckInfo: builder.query<DecksItems, { id: string }>({
        query: arg => ({
          method: 'GET',
          url: `v1/decks/${arg.id}`,
        }),
      }),
      getDecks: builder.query<GetDecks, Partial<GetDecksArgs> | void>({
        providesTags: ['Decks'],
        query: arg => {
          return {
            method: 'GET',
            params: arg ?? {},
            url: `v1/decks`,
          }
        },
      }),
      updateDeck: builder.mutation<DecksItems, { data: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          body: arg.data,
          method: 'PATCH',
          url: `v1/decks/${arg.id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDecksMutation,
  useDeleteDeckMutation,
  useGetDeckInfoQuery,
  useGetDecksQuery,
  useLazyGetDeckInfoQuery,
  useLazyGetDecksQuery,
  useUpdateDeckMutation,
} = decksAPI
