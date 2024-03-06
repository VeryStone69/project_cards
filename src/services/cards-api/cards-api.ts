import { baseApi } from '@/services/base-api/base-api'
import {
  CardRate,
  CardsItem,
  CardsParams,
  CardsResponse,
} from '@/services/cards-api/cards-api-types'
import { errorNotification } from '@/utils/error-notification/error-notification'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      RateCard: builder.mutation<CardsItem, CardRate>({
        invalidatesTags: ['Cards'],
        async onQueryStarted({ deckId }, { dispatch, queryFulfilled }) {
          try {
            const { data: newCard } = await queryFulfilled

            dispatch(
              cardsApi.util.updateQueryData('getLearnCard', { id: deckId }, () => {
                return newCard
              })
            )
          } catch (error) {
            errorNotification(error)
          }
        },
        query: ({ deckId, ...rest }) => ({
          body: rest,
          method: 'POST',
          url: `v1/decks/${deckId}/learn`,
        }),
      }),
      createCardsInDeck: builder.mutation<
        Omit<CardsItem, 'grade'>,
        {
          data: FormData
          id: string
        }
      >({
        invalidatesTags: ['Cards'],
        query: arg => {
          return {
            body: arg.data,
            method: 'POST',
            url: `v1/decks/${arg.id}/cards`,
          }
        },
      }),
      deleteCard: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
          let patchResult: any

          for (const { endpointName, originalArgs } of cardsApi.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Cards' }]
          )) {
            if (endpointName !== 'getCardsInDeck') {
              continue
            }
            patchResult = dispatch(
              cardsApi.util.updateQueryData(endpointName, originalArgs, draft => {
                const index = draft?.items?.findIndex(card => card.id === id)

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
        query: arg => ({
          body: arg,
          method: 'DELETE',
          url: `v1/cards/${arg.id}`,
        }),
      }),
      getCardsInDeck: builder.query<
        CardsResponse,
        {
          packId: string
          params: CardsParams
        }
      >({
        providesTags: ['Cards'],
        query: arg => {
          return {
            method: 'GET',
            params: arg.params ?? {},
            url: `v1/decks/${arg.packId}/cards`,
          }
        },
      }),
      getLearnCard: builder.query<CardsItem, { id: string }>({
        providesTags: ['Cards'],
        query: arg => ({
          method: 'GET',
          url: `v1/decks/${arg.id}/learn`,
        }),
      }),
      updateCard: builder.mutation<
        Omit<CardsItem, 'grade'>,
        {
          cardId: string
          data: FormData
        }
      >({
        invalidatesTags: ['Cards'],
        async onQueryStarted({ cardId, ...data }, { dispatch, getState, queryFulfilled }) {
          let patchResult: any

          const parsedData: Record<string, any> = {}

          data.data.forEach((value, key) => {
            parsedData[key] = value
          })

          for (const { endpointName, originalArgs } of cardsApi.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Cards' }]
          )) {
            if (endpointName !== 'getCardsInDeck') {
              continue
            }
            patchResult = dispatch(
              cardsApi.util.updateQueryData(endpointName, originalArgs, draft => {
                const index = draft?.items?.findIndex(card => card.id === cardId)

                if (index === -1) {
                  return
                }

                Object.assign(draft?.items[index], parsedData)
              })
            )
          }

          try {
            await queryFulfilled
          } catch {
            patchResult?.undo()
          }
        },
        query: ({ cardId, data }) => ({
          body: data,
          method: 'PATCH',
          url: `v1/cards/${cardId}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardsInDeckMutation,
  useDeleteCardMutation,
  useGetCardsInDeckQuery,
  useGetLearnCardQuery,
  useLazyGetCardsInDeckQuery,
  useLazyGetLearnCardQuery,
  useUpdateCardMutation,
  useRateCardMutation,
} = cardsApi
