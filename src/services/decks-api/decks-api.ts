import { baseApi } from '@/services/base-api/base-api'
import { DecksItems, GetDecks, GetDecksArgs } from '@/services/decks-api/decks-api.types'

export const decksAPI = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDecks: builder.mutation<DecksItems, FormData>({
        invalidatesTags: ['Decks'],
        async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
          let patchResult: any

          try {
            const res = await queryFulfilled

            for (const { endpointName, originalArgs } of decksAPI.util.selectInvalidatedBy(
              getState(),
              [{ type: 'Decks' }]
            )) {
              if (endpointName !== 'getDecks') {
                continue
              }
              patchResult = dispatch(
                decksAPI.util.updateQueryData(endpointName, originalArgs, draft => {
                  draft.items.unshift(res.data)
                })
              )
            }
          } catch {
            patchResult?.undo()
          }
        },
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
        async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
          let patchResult: any

          for (const { endpointName, originalArgs } of decksAPI.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Decks' }]
          )) {
            if (endpointName !== 'getDecks') {
              continue
            }
            patchResult = dispatch(
              decksAPI.util.updateQueryData(endpointName, originalArgs, draft => {
                const index = draft?.items?.findIndex(deck => deck.id === id)

                if (index !== undefined && index !== -1) {
                  draft?.items?.splice(index, 1)
                }
              })
            )
          }

          try {
            await queryFulfilled
          } catch {
            patchResult?.undo()
          }
        },
        query: arg => {
          return {
            body: arg.id,
            method: 'DELETE',
            url: `v1/decks/${arg.id}`,
          }
        },
      }),
      getDeckInfo: builder.query<DecksItems, { id: string }>({
        providesTags: ['Decks'],
        query: arg => ({
          method: 'GET',
          url: `v1/decks/${arg.id}`,
        }),
      }),
      getDecks: builder.query<GetDecks, Partial<GetDecksArgs> | void>({
        providesTags: ['Decks'],
        query: arg => {
          return {
            params: arg ?? {},
            url: `v1/decks`,
          }
        },
      }),
      updateDeck: builder.mutation<DecksItems, { data: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async function ({ id, ...data }, { dispatch, getState, queryFulfilled }) {
          let patchResult: any

          const parsedData: Record<string, any> = {}

          data.data.forEach((value, key) => {
            parsedData[key] = value
          })

          for (const { endpointName, originalArgs } of decksAPI.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Decks' }]
          )) {
            if (endpointName !== 'getDecks') {
              continue
            }
            patchResult = dispatch(
              decksAPI.util.updateQueryData(endpointName, originalArgs, draft => {
                const index = draft?.items?.findIndex(deck => deck.id === id)

                if (index === -1) {
                  return
                }
                Object.assign(draft?.items?.[index], parsedData)
              })
            )
          }

          try {
            await queryFulfilled
          } catch {
            patchResult?.undo()
          }
        },
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
